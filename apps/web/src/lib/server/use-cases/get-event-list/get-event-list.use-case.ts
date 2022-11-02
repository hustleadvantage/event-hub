import { Date as DateUtils } from '$shared/utils';
import { array as A, taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { ImageDto, LocationDto, NameDto } from '$server/dtos';
import { EventbriteApi } from '$server/services';

const getEventsByOrganization = (organizationId: string) =>
	EventbriteApi.events.getByOrganization(organizationId);

const toDetailUrl = (id: string): App.EventListItem.DetailUrl => `/${id}`;

const toTime = (date: string, timeZone: string) =>
	DateUtils.format(date)({
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZone,
		timeZoneName: 'short'
	});

const toDateTime = (
	date: Date,
	dateFormatOptions: Intl.DateTimeFormatOptions,
	timeFormatOptions: Intl.DateTimeFormatOptions
) => {
	return {
		_type: 'date_time',
		date: DateUtils.format(date)(dateFormatOptions),
		time: DateUtils.format(date)(timeFormatOptions),
		year: DateUtils.getYear(date),
		month: DateUtils.getMonth(date)
	};
};

const toLocationPresenter = (eventDto: Eventbrite.Event): string => {
	const location = LocationDto.toPresenter(eventDto);

	if (location._type === 'venue') {
		return `${location.name}, ${location.address}`;
	}

	return location.value;
};

const toBaseProps = (event: Eventbrite.Event) => {
	const { id, logo, name: eventName, start: eventStart, summary } = event;

	const detailUrl = toDetailUrl(id);
	const image = ImageDto.toPresenter(logo);
	const location = toLocationPresenter(event);
	const name = NameDto.toPresenter(eventName);

	const baseProps: App.EventListItem.BaseProps = {
		id,
		detailUrl,
		image,
		location,
		name,
		summary
	};

	return baseProps;
};

const toSingleEvent = (event: Eventbrite.Event) => {
	const baseProps = toBaseProps(event);

	const startDate = DateUtils.create(event.start.local);
	const month = DateUtils.getMonth(startDate);
	const year = DateUtils.getFullYear(startDate);

	const item: App.SingleEventListItem = {
		_type: 'single',
		...baseProps,
		dateDetails: {
			_type: 'start_date',
			date: '',
			month,
			year
		}
	};

	return item;
};

const toRecurringEventDate = (event: Eventbrite.Event) => {
	const startDate = DateUtils.create(event.start.local);
	const month = DateUtils.getMonth(startDate);
	const year = DateUtils.getFullYear(startDate);

	const date: App.RecurringEventListItem.Date = {
		month,
		year
	};

	return date;
};

const toRecurringEvent = (event: Eventbrite.Event, events: Eventbrite.Event[]) => {
	const baseProps = toBaseProps(event);
	const dates = pipe(events, A.map(toRecurringEventDate));

	const item: App.RecurringEventListItem = {
		_type: 'recurring',
		...baseProps,
		dateDetails: 'Multiple dates available',
		dates
	};

	return item;
};

const getRecurringEventEvents = (eventSeriesId: string) =>
	pipe(
		EventbriteApi.events.getBySeries(eventSeriesId),
		TE.map(({ events }) => events)
	);

const filterBySingleEvents = (events: Eventbrite.Event[]) =>
	events.filter((event) => !event.is_series);

const filterByEventSeries = (events: Eventbrite.Event[]) =>
	events.filter((event) => event.is_series);

const sortByDate = (a: any, b: any) => {
	return new Date(a.start).getTime() - new Date(b.start).getTime();
};

type GetEventListQuery = {
	organizationId: string;
};

export const getEventListUseCase = ({ organizationId }: GetEventListQuery) => {
	return pipe(
		TE.Do,
		TE.bind('eventsResult', () => getEventsByOrganization(organizationId)),
		TE.bind('singleEvents', ({ eventsResult }) =>
			TE.right(pipe(eventsResult.events, filterBySingleEvents, A.map(toSingleEvent)))
		),
		TE.bind('recurringEvents', ({ eventsResult }) =>
			TE.right(pipe(eventsResult.events, filterByEventSeries))
		),
		TE.chain(({ singleEvents, recurringEvents }) => {
			return pipe(
				recurringEvents,
				A.map((eventSeries) => {
					return pipe(
						TE.Do,
						TE.bind('recurringEventEvents', () => getRecurringEventEvents(eventSeries.id)),
						TE.map(({ recurringEventEvents }) => {
							return toRecurringEvent(eventSeries, recurringEventEvents);
						})
					);
				}),
				TE.sequenceArray,
				TE.map((newEventSeriesEvents) => {
					return [...singleEvents, ...newEventSeriesEvents].sort(sortByDate);
				})
			);
		}),
		TE.map((events) => events)
	);
};
