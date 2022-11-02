/// <reference types="eventbrite/types" />

declare namespace App {
	type Project = {
		id: string;
		subscription_status: Project.SubscriptionStatus;
		tier: Tier;
	};

	namespace Project {
		type SubscriptionStatus = 'active' | 'inactive';

		type Tier = 'starter' | 'growth' | 'scale';
	}

	type Event = App.SingleEvent | App.RecurringEvent;

	namespace Event {
		type CTA = {
			label: string;
			url: string;
		};

		type DateDetails = SingleEvent.DateDetails | RecurringEvent.DateDetails;

		type Image = {
			ratio: number;
			height: number;
			width: number;
			url: string;
		};

		type OnlineLocation = {
			_type: 'online';
			value: 'Online event';
		};

		type LocationToBeAnnounced = {
			_type: 'to_be_announced';
			value: 'To be announced';
		};

		type Venue = {
			_type: 'venue';
			address: string;
			name: string;
		};

		type Location = LocationToBeAnnounced | OnlineLocation | Venue;

		type Content = StructuredContent.Block[];

		namespace StructuredContent {
			type Image = {
				_type: 'image';
				id: string;
				ratio: number;
				height: number;
				width: number;
				url: string;
			};

			type Text = {
				_type: 'text';
				id: string;
				value: string;
			};

			type Video = {
				_type: 'video';
				id: string;
				url: string;
			};

			type Block = Image | Text | Video;
		}

		type Type = SingleType | RecurringType;

		namespace Type {
			type Single = 'single';
			type Recurring = 'recurring';
		}
	}

	type Theme = {
		colors: {
			primary: string;
			secondary: string;
			accent: string;
		};
	};
}
