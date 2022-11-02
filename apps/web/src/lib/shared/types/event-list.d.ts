declare namespace App {
	type SingleEventListItem = EventListItem.BaseProps & {
		_type: EventListItem.Type.Single;
		dateDetails: SingleEventListItem.DateDetails;
	};

	namespace SingleEventListItem {
		type StartDate = {
			_type: 'start_date';
			date: string;
			month: number;
			year: number;
		};

		type StartDateAndTime = {
			_type: 'start_date_time';
			date: string;
			time: string;
			month: number;
			year: number;
		};

		type DateDetails = StartDate | StartDateAndTime;
	}

	type RecurringEventListItem = EventListItem.BaseProps & {
		_type: EventListItem.Type.Recurring;
		dateDetails: string; // i.e. Multiple dates available
		dates: RecurringEventListItem.Date[]; // used to filter events by year and month
	};

	namespace RecurringEventListItem {
		type Date = {
			month: number;
			year: number;
		};
	}

	type EventListItem = SingleEventListItem | RecurringEventListItem;

	type EventList = {
		events: EventListItem[];
	};

	namespace EventListItem {
		type BaseProps = {
			id: string;
			detailUrl: DetailUrl;
			image: EventListItem.Image;
			location: string;
			name: string;
			summary: string;
		};

		type DetailUrl = `/${string}`;

		type Image = {
			ratio: number;
			height: number;
			width: number;
			url: string;
		};

		type Type = Type.Single | Type.Recurring;

		namespace Type {
			type Single = 'single';
			type Recurring = 'recurring';
		}
	}
}
