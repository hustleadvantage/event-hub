import * as forbidden from './forbidden';
import * as invalidRequest from './invalid-request';
import * as notFound from './not-found';
import * as unexpected from './unexpected';

export const HttpErrors = {
	forbidden,
	invalidRequest,
	notFound,
	unexpected
};
