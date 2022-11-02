declare namespace App {
	type RecurringEvent = {
		id: string;
		content: Event.Content;
		cta: RecurringEvent.CTA;
		dateDetails: RecurringEvent.DateDetails;
		image: Event.Image;
		location: Event.Location;
		name: string;
		summary: string;
	};

	namespace RecurringEvent {
		type CTA = {
			label: 'Select A Date';
			url: `/checkout?${string}`;
		};

		type MultipleDatesAndTimes = {
			_type: 'multiple_dates';
			label: 'Multiple dates';
		};

		type DateDetails = MultipleDatesAndTimes;
	}
}
