const isEventList = (data: HomePage.EventData): data is HomePage.EventList => data._type === 'list';

const isEvent = (data: HomePage.EventData): data is HomePage.Event => data._type === 'event';

export const useViewModel = () => {
	return {
		isEvent,
		isEventList
	};
};
