type EventDetailPageErrorProps = {
	type: 'inactive_subscription' | 'internal' | 'unauthorized' | 'unexpected';
	message: string;
};

export class GetEventDetailPageError extends Error {
	_type;

	constructor(props: EventDetailPageErrorProps) {
		super(props.message);

		this._type = props.type;
	}
}

export module GetEventDetailPageErrors {
	export class InactiveSubscription extends GetEventDetailPageError {
		constructor() {
			super({ type: 'inactive_subscription', message: `Inactive project subscription` });
		}
	}

	export class Internal extends GetEventDetailPageError {
		constructor(message: string) {
			super({ type: 'internal', message });
		}
	}

	export class Unexpected extends GetEventDetailPageError {
		constructor(message: string) {
			super({ type: 'unexpected', message });
		}
	}

	export class Unauthorized extends GetEventDetailPageError {
		constructor(message: string) {
			super({ type: 'unauthorized', message });
		}
	}
}
