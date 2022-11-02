type CheckProjectSubscriptionErrorProps = {
	type: 'unauthorized' | 'unexpected';
	message: string;
};

export class CheckProjectSubscriptionError extends Error {
	_type;

	constructor(props: CheckProjectSubscriptionErrorProps) {
		super(props.message);

		this._type = props.type;
	}
}

export module CheckProjectSubscriptionErrors {
	export class Unathorized extends CheckProjectSubscriptionError {
		constructor(message: string) {
			super({
				message,
				type: 'unauthorized'
			});
		}
	}

	export class Unexpected extends CheckProjectSubscriptionError {
		constructor(message: string) {
			super({
				message,
				type: 'unexpected'
			});
		}
	}
}
