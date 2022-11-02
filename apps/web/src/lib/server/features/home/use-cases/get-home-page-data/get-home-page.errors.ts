type HomePageErrorProps = {
	type: 'inactive_subscription' | 'internal' | 'unauthorized' | 'unexpected';
	message: string;
};

export class GetHomePageError extends Error {
	_type;

	constructor(props: HomePageErrorProps) {
		super(props.message);

		this._type = props.type;
	}
}

export module GetHomePageErrors {
	export class InactiveSubscription extends GetHomePageError {
		constructor() {
			super({ type: 'inactive_subscription', message: `Inactive project subscription` });
		}
	}

	export class Internal extends GetHomePageError {
		constructor(message: string) {
			super({ type: 'internal', message });
		}
	}

	export class Unexpected extends GetHomePageError {
		constructor(message: string) {
			super({ type: 'unexpected', message });
		}
	}

	export class Unauthorized extends GetHomePageError {
		constructor(message: string) {
			super({ type: 'unauthorized', message });
		}
	}
}
