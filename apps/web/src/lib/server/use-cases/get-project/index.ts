import { GetProjectError as ErrorRoot, CacheError, DatabaseError } from './get-project.errors';

export const GetProjectError = Object.assign(ErrorRoot, {
	CacheError,
	DatabaseError
});

export { getProjectUseCase } from './get-project.use-case';
