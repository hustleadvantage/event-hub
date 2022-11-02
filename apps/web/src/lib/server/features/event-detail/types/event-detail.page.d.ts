type EventDetailPage = {
	event: EventDetailPage.EventData;
};

namespace EventDetailPage {
	type Event = App.SingleEvent | App.RecurringEvent;
}
