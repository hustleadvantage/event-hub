type Props = {
	errors: App.HttpErrors.InvalidRequest.Error[];
	message: string;
};

export const create = (props: Props) => {
	const error: App.HttpErrors.InvalidRequest = {
		errors: props.errors,
		message: props.message,
		status: 400,
		type: 'invalid_request'
	};

	return error;
};
