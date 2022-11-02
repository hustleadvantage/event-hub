import {
	differenceInDays as dateFnsDifferenceInDays,
	differenceInMinutes as dateFnsDifferenceInMinutes,
	getMonth as dateFnsGetMonth,
	getYear as dateFnsGetYear
} from 'date-fns';

type GetHours = (date: Date) => number;
type GetMinutes = (date: Date) => string | number;

export const format = (date: Date | string) => (options: Intl.DateTimeFormatOptions) => {
	if (date instanceof Date) {
		return new Intl.DateTimeFormat('en-US', options).format(date);
	}

	return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const getMonth = (date: Date) => dateFnsGetMonth(date);

export const getYear = (date: Date) => dateFnsGetYear(date);

export const getTimePeriod = (hour: number) => (hour > 12 ? 'PM' : 'AM');

export const getHours: GetHours = (date: Date) => {
	const hours = date.getHours();

	return hours % 12 ? hours : 12;
};

export const getMinutes: GetMinutes = (date: Date) => {
	const minutes = date.getMinutes();

	return minutes < 10 ? '0' + minutes : minutes;
};

export const getDate =
	(date: Date) =>
	(options: Pick<Intl.DateTimeFormatOptions, 'day' | 'month' | 'weekday' | 'year'>) => {
		return new Intl.DateTimeFormat('en-US', options).format(date);
	};

export const getTime =
	(date: Date) =>
	(options: Pick<Intl.DateTimeFormatOptions, 'hour' | 'hour12' | 'minute' | 'timeZoneName'>) => {
		return new Intl.DateTimeFormat('en-US', options).format(date);
	};

export const getFullYear = (date: Date) => date.getFullYear();

export const isSameDay = (start: Date, end: Date) => {
	const isSameYear = start.getFullYear() === end.getFullYear();
	const isSameMonth = start.getMonth() === end.getMonth();
	const isSameDay = start.getDate() === end.getDate();

	return isSameYear && isSameMonth && isSameDay;
};

export const create = (datestring: string) => new Date(datestring);

export const differenceInMinutes = (start: Date, end: Date) =>
	dateFnsDifferenceInMinutes(end, start);

export const minutesToHours = (minutes: number) => minutes / 60;

export const getHoursSuffix = (hours: number) => (hours > 1 ? 'hours' : 'hour');

export const getMinutesSuffix = (minutes: number) => (minutes > 1 ? 'minutes' : 'minute');

export const formatMinutes = (minutes: number) => minutes + ' ' + getMinutesSuffix(minutes);

export const formatHours = (hours: number) => hours + ' ' + getHoursSuffix(hours);

export const formatDurationInHoursAndMinutes = (minutes: number) => {
	if (minutes < 60) {
		return formatMinutes(minutes);
	}

	const hours = minutesToHours(minutes);

	return formatHours(hours);
};

export const differenceInDays = (start: Date, end: Date) => dateFnsDifferenceInDays(end, start);

export const getDaysSuffix = (days: number) => (days > 1 ? 'days' : 'day');

export const formatDays = (days: number) => days + ' ' + getDaysSuffix(days);

export const formatDurationInDays = (days: number) => formatDays(days);
