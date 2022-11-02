const isForbiddenError = (status: number): status is 403 => status === 403;

const isNotFoundError = (status: number): status is 404 => status === 404;

export const useErrorViewModel = () => {
	return {
		isForbiddenError,
		isNotFoundError
	};
};
