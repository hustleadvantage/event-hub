import { writable } from 'svelte/store';

export const eventsStore = writable<App.EventListItem[]>();

const setEvents = (newEvents: App.EventListItem[]) => {
	eventsStore.set(newEvents);
};

type Props = {
	events: App.EventListItem[];
};

export const useEventListViewModel = (props: Props) => {
	eventsStore.set(props.events);

	return {
		eventsStore,
		setEvents
	};
};
