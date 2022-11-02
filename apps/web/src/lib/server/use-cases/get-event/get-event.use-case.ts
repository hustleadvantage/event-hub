import { either, taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { DateDto, ImageDto, LocationDto, NameDto, StructuredContentDto } from '$server/dtos';
import { EventbriteApi } from '$server/services';
import { GetEventErrors } from './get-event.errors';

const getEvent = (eventId: string) => {
	return pipe(
		EventbriteApi.events.retrieve(eventId),
		TE.mapLeft((error) => {
			switch (error.status) {
				case 404:
					return new GetEventErrors.NotFound(
						`Eventbrite: getSingleEvent - event with id ${eventId} not found`
					);
				default:
					return new GetEventErrors.Unexpected(`Eventbrite: getSingleEvent - ${error.message}`);
			}
		})
	);
};

const isGrowthTier = (tier: Domain.Project.Tier) => tier === 'growth';
const isScaleTier = (tier: Domain.Project.Tier) => tier === 'scale';

const checkAuthorized = (tier: Domain.Project.Tier, event: Eventbrite.Event) => {
	const { is_series: isRecurringEvent } = event;

	if (isRecurringEvent) {
		return either.fromPredicate(
			(tier: Domain.Project.Tier) => isGrowthTier(tier) || isScaleTier(tier),
			() => new GetEventErrors.Unathorized(`Not authorized for recurring events.`)
		)(tier);
	}

	return either.right(tier);
};

const getStructuredContent = (eventId: string) => {
	return pipe(
		EventbriteApi.events.getStructuredContent(eventId),
		TE.mapLeft((error) => {
			switch (error.status) {
				case 404:
					return new GetEventErrors.NotFound(
						`Eventbrite: getStructuredContent - for event with id ${eventId} not found`
					);
				default:
					return new GetEventErrors.Unexpected(
						`Eventbrite: getStructuredContent - ${error.message}`
					);
			}
		})
	);
};

const toSingleEventCta = (event: Eventbrite.Event) => {
	const { id, is_free: isFree } = event;

	const cta: App.SingleEvent.CTA = {
		label: isFree ? 'Register For Free' : 'Get Tickets',
		url: `/checkout?id=${id}`
	};

	return cta;
};

export const toSingleEventPresenter = (
	eventDto: Eventbrite.Event,
	contentDto: Eventbrite.StructuredContent
) => {
	const id = eventDto.id;
	const dateDetails = DateDto.toPresenter(eventDto);
	const cta = toSingleEventCta(eventDto);
	const newContent = StructuredContentDto.toPresenter(contentDto);
	const image = ImageDto.toPresenter(eventDto.logo);
	const location = LocationDto.toPresenter(eventDto);
	const name = NameDto.toPresenter(eventDto.name);
	const summary = eventDto.summary;

	const singleEvent: App.SingleEvent = {
		id,
		cta,
		content: newContent,
		dateDetails,
		image,
		location,
		name,
		summary
	};

	return singleEvent;
};

const toRecurringEventCta = (event: Eventbrite.Event) => {
	const id = event.id;

	const cta: App.RecurringEvent.CTA = {
		label: 'Select A Date',
		url: `/checkout?id=${id}`
	};

	return cta;
};

const toRecurringEventPresenter = (
	eventDto: Eventbrite.Event,
	contentDto: Eventbrite.StructuredContent
) => {
	const id = eventDto.id;
	const content = StructuredContentDto.toPresenter(contentDto);
	const cta = toRecurringEventCta(eventDto);
	const dateDetails: App.RecurringEvent.DateDetails = {
		_type: 'multiple_dates',
		label: 'Multiple dates'
	};
	const image = ImageDto.toPresenter(eventDto.logo);
	const location = LocationDto.toPresenter(eventDto);
	const name = NameDto.toPresenter(eventDto.name);
	const summary = eventDto.summary;

	const recurringEvent: App.RecurringEvent = {
		id,
		content,
		cta,
		dateDetails,
		image,
		location,
		name,
		summary
	};

	return recurringEvent;
};

const isRecurringEvent = (event: Eventbrite.Event) => event.is_series;

type GetSingleEventQuery = {
	tier: Domain.Project.Tier;
	id: string;
};

export const getEventUseCase = ({ id, tier }: GetSingleEventQuery) => {
	return pipe(
		TE.Do,
		TE.bind('eventDto', () => getEvent(id)),
		TE.bind('authorized', ({ eventDto }) => TE.fromEither(checkAuthorized(tier, eventDto))),
		TE.bind('structuredContentDto', ({ eventDto }) => getStructuredContent(eventDto.id)),
		TE.map(({ eventDto, structuredContentDto }) => {
			if (isRecurringEvent(eventDto)) {
				return toRecurringEventPresenter(eventDto, structuredContentDto);
			}

			return toSingleEventPresenter(eventDto, structuredContentDto);
		}),
		TE.map((event) => event)
	);
};
