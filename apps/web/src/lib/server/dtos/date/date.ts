import { Date as DateUtils } from '$shared/utils';

export const hasHiddenEndDateTime = (event: Eventbrite.Event) => event.hide_end_date;

export const hasHiddenStartTime = (event: Eventbrite.Event) => event.hide_start_date;

export const hasHiddenTimes = (event: Eventbrite.Event) => event.hide_start_date;

export const toTime = (date: string, timeZone: string) =>
	DateUtils.format(date)({
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZone,
		timeZoneName: 'short'
	});

export const toDateTime = (
	date: Date,
	dateFormatOptions: Intl.DateTimeFormatOptions,
	timeFormatOptions: Intl.DateTimeFormatOptions
): App.SingleEvent.DateTime => {
	return {
		_type: 'date_time',
		date: DateUtils.format(date)(dateFormatOptions),
		time: DateUtils.format(date)(timeFormatOptions)
	};
};

export const toDate = (
	date: Date,
	formatOptions: Intl.DateTimeFormatOptions
): App.SingleEvent.Date => {
	return {
		_type: 'date',
		date: DateUtils.format(date)(formatOptions)
	};
};

const toDateAndTimes = (
	startDate: Date,
	endDate: Date,
	timezone: string
): App.SingleEvent.DateAndTimes => {
	const startTime = DateUtils.format(startDate)({
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	});

	const endTime = DateUtils.format(endDate)({
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZone: timezone,
		timeZoneName: 'short'
	});

	const dateFormatOptions: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'short',
		weekday: 'short',
		year: 'numeric',
		timeZone: timezone
	};

	return {
		_type: 'date_times',
		date: DateUtils.format(startDate)(dateFormatOptions),
		time: `${startTime} - ${endTime}`
	};
};

const toDatesAndTimes = (
	startDate: Date,
	endDate: Date,
	timezone: string
): App.SingleEvent.DatesAndTimes => {
	const dateFormatOptions: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'short',
		weekday: 'short',
		year: 'numeric'
	};

	const startTimeFormatOptions: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	};

	const endTimeFormatOptions: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZone: timezone,
		timeZoneName: 'short'
	};

	const startDateTime = toDateTime(startDate, dateFormatOptions, startTimeFormatOptions);

	const endDateTime = toDateTime(endDate, dateFormatOptions, endTimeFormatOptions);

	return {
		_type: 'dates_times',
		dateTime: `${startDateTime.date}, ${startDateTime.time} - ${endDateTime.date}, ${endDateTime.time}`
	};
};

export const toPresenter = (event: Eventbrite.Event): App.SingleEvent.DateDetails => {
	const startDate = new Date(event.start.local);
	const endDate = new Date(event.end.local);
	const timezone = event.start.timezone;

	if (hasHiddenTimes(event)) {
		const dateFormatOptions: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			weekday: 'short',
			year: 'numeric',
			timeZone: timezone
		};

		return toDate(startDate, dateFormatOptions);
	}

	if (hasHiddenEndDateTime(event)) {
		const dateFormatOptions: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			weekday: 'short',
			year: 'numeric',
			timeZone: timezone
		};

		const timeFormatOptions: Intl.DateTimeFormatOptions = {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true,
			timeZone: timezone,
			timeZoneName: 'short'
		};

		return toDateTime(startDate, dateFormatOptions, timeFormatOptions);
	}

	const isSameDay = DateUtils.isSameDay(startDate, endDate);

	if (isSameDay) {
		return toDateAndTimes(startDate, endDate, timezone);
	}

	return toDatesAndTimes(startDate, endDate, timezone);
};
