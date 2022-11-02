export class GetProjectError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export class DatabaseError extends GetProjectError {
	constructor(message: string) {
		super(message);
	}
}

export class CacheError extends GetProjectError {
	constructor(message: string) {
		super(message);
	}
}
