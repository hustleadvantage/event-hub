type Props = {
	message: string;
};

export const create = (props: Props) => {
	const error: App.HttpErrors.Unexpected = {
		message: props.message,
		status: 500,
		type: 'unexpected'
	};

	return error;
};
