type HomePage = {
	eventData: HomePage.EventData;
};

namespace HomePage {
	type Event = {
		_type: 'event';
	} & (App.SingleEvent | App.RecurringEvent);

	type EventList = {
		_type: 'list';
	} & App.EventList;

	type EventData = Event | EventList;
}
