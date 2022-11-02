import { pipe } from 'fp-ts/lib/function';
import { onDestroy } from 'svelte';
import { get, writable } from 'svelte/store';

type Event = App.EventListItem;

const isRecurringEvent = (event: Event): event is App.RecurringEventListItem =>
	event._type === 'recurring';

const isSameYear = (first: unknown, second: unknown) => first === second;

const isSameMonth = (first: unknown, second: unknown) => first === second;

const byYearAndMonth = (year: number, month: number) => (event: Event) => {
	if (isRecurringEvent(event)) {
		return event.dates.some((date) => {
			return isSameYear(year, date.year) && isSameMonth(month, date.month);
		});
	}

	const { dateDetails } = event;

	return isSameYear(year, dateDetails.year) && isSameMonth(month, dateDetails.month);
};

const filterByYearAndMonth = (year: number, month: number) => (events: Event[]) => {
	return events.filter(byYearAndMonth(year, month));
};

type ThisMonthFilter = {
	label: 'This Month';
	key: 'current';
	year: number;
	month: number;
};
type NextMonthFilter = {
	label: 'Next Month';
	key: 'next';
	year: number;
	month: number;
};

type MonthFilter = ThisMonthFilter | NextMonthFilter;

const byName = (searchTerm: string) => (event: Event) => {
	const newEventname = event.name.toLowerCase();
	const newSearchTerm = searchTerm.toLowerCase();

	return newEventname.includes(newSearchTerm);
};

const filterBySearchTerm = (searchTerm: string) => (events: Event[]) => {
	return events.filter(byName(searchTerm));
};

const getMonthFilterOptions = () => {
	const date = new Date();
	const currentMonth = date.getMonth();
	const currentYear = date.getFullYear();

	const thisMonthFilter: ThisMonthFilter = {
		label: 'This Month',
		key: 'current',
		year: currentYear,
		month: currentMonth
	};

	const isDecember = currentMonth === 11;
	const january = 0;

	const nextMonthYear = isDecember ? currentYear + 1 : currentYear;
	const nextMonth = isDecember ? january : currentMonth + 1;

	const nextMonthFilter: NextMonthFilter = {
		label: 'Next Month',
		key: 'next',
		year: nextMonthYear,
		month: nextMonth
	};

	return [thisMonthFilter, nextMonthFilter];
};

const filterEvents = (monthFilter: MonthFilter, searchTerm: string) => (events: Event[]) => {
	const { year, month } = monthFilter;

	return pipe(events, filterByYearAndMonth(year, month), filterBySearchTerm(searchTerm));
};

export const useEventListViewModel = (events: Event[]) => {
	const filteredEvents = writable<Event[]>();

	const monthFilterOptions = getMonthFilterOptions();
	const monthFilter = writable<MonthFilter>(monthFilterOptions[0]);

	const searchTerm = writable('');

	const updateFilteredEvents = () => {
		const $monthFilter = get(monthFilter);
		const $searchTerm = get(searchTerm);

		const newFiltered = pipe(events, filterEvents($monthFilter, $searchTerm));

		filteredEvents.set(newFiltered);
	};

	const searchEvents = () => {
		updateFilteredEvents();
	};

	const unbindWatchMonthFilter = monthFilter.subscribe(() => {
		updateFilteredEvents();
	});

	updateFilteredEvents();

	onDestroy(() => {
		unbindWatchMonthFilter();
	});

	return {
		filteredEvents,
		monthFilter,
		monthFilterOptions,
		searchTerm,
		searchEvents
	};
};
