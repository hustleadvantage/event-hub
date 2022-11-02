type GetEventErrorProps = {
	type: 'not_found' | 'unauthorized' | 'unexpected';
	message: string;
};

export class GetEventError extends Error {
	_type;

	constructor(props: GetEventErrorProps) {
		super(props.message);

		this._type = props.type;
	}
}

export module GetEventErrors {
	export class NotFound extends GetEventError {
		constructor(message: string) {
			super({ message, type: 'not_found' });
		}
	}

	export class Unathorized extends GetEventError {
		constructor(message: string) {
			super({
				message,
				type: 'unauthorized'
			});
		}
	}

	export class Unexpected extends GetEventError {
		constructor(message: string) {
			super({
				message,
				type: 'unexpected'
			});
		}
	}
}
