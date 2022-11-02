declare namespace App {
	type SingleEvent = {
		id: string;
		content: App.Event.Content;
		cta: SingleEvent.CTA;
		dateDetails: App.Event.DateDetails;
		image: Event.Image;
		location: Event.Location;
		name: string;
		summary: string;
	};

	namespace SingleEvent {
		type CTA = {
			url: string;
			label: 'Register' | 'Register For Free' | 'Get Tickets';
		};

		type Date = {
			_type: 'date';
			date: string;
		};

		type DateTime = {
			_type: 'date_time';
			date: string;
			time: string;
		};

		type DateAndTimes = {
			_type: 'date_times';
			date: string;
			time: string;
		};

		type DatesAndTimes = {
			_type: 'dates_times';
			dateTime: string;
		};

		type DateDetails = Date | DateTime | DateAndTimes | DatesAndTimes;
	}
}
