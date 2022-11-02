type Props = {
	code?: string;
	message: string;
};

export const create = (props: Props) => {
	const error: App.HttpErrors.Forbidden = {
		message: props.message,
		status: 403,
		type: 'forbidden',
		code: props.code
	};

	return error;
};
