type Props = {
	message: string;
};

export const create = (props: Props) => {
	const error: App.HttpErrors.NotFound = {
		message: props.message,
		status: 404,
		type: 'not_found'
	};

	return error;
};
