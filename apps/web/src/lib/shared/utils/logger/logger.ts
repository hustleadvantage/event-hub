import pino from 'pino';
import { Env } from '../environment';

const logger = pino({
	transport: {
		target: Env.isDev ? 'pino-pretty' : '',
		options: {
			translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
			ignore: 'pid,hostname'
		}
	}
});

export const error = (message: string | object) => {
	logger.error(message);
};

export const fatal = (error: Error | object) => {
	logger.fatal(error);
};

export const info = (message: string | object) => {
	logger.info(message);
};

export const warning = (message: string) => {
	logger.warn(message);
};
