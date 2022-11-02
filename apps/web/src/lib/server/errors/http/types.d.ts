declare namespace App {
	type HttpErrorBase = {
		code?: string;
		message: string;
		type: HttpErrorType;
	};

	type HttpErrorType =
		| HttpErrorTypes.Forbidden
		| HttpErrorTypes.InvalidRequest
		| HttpErrorTypes.NotFound
		| HttpErrorTypes.Unexpected;

	namespace HttpErrorTypes {
		type Forbidden = 'forbidden';
		type InvalidRequest = 'invalid_request';
		type NotFound = 'not_found';
		type Unexpected = 'unexpected';
	}

	type HttpError =
		| HttpErrors.Forbidden
		| HttpErrors.InvalidRequest
		| HttpErrors.NotFound
		| HttpErrors.Unexpected;

	namespace HttpErrors {
		type Forbidden = HttpErrorBase & {
			status: 403;
			type: HttpErrorTypes.Forbidden;
		};

		type InvalidRequest = HttpErrorBase & {
			errors: InvalidRequest.Error[];
			status: 400;
			type: HttpErrorTypes.InvalidRequest;
		};

		namespace InvalidRequest {
			type Error = { field: string; message: string };
		}

		type NotFound = HttpErrorBase & { status: 404; type: HttpErrorTypes.NotFound };

		type Unexpected = HttpErrorBase & { status: 500; type: HttpErrorTypes.Unexpected };
	}
}
