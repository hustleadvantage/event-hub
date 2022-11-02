import { trackFacebookConversionUseCase } from '$server/use-cases';
import { error, type RequestHandler } from '@sveltejs/kit';
import { either as E, taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const orderId = body.order_id;
	const ip = body.ip;

	if (!orderId) {
		throw error(400, `order_id is required`);
	}

	const result = await pipe(
		TE.tryCatch(
			() =>
				fetch(`https://www.eventbriteapi.com/v3/orders/${orderId}/`, {
					headers: {
						Authorization: `Bearer MIEL7TGXKV7ISPKXPMLG`,
						Accept: 'application/json'
					}
				}),
			(error) => new Error(`${error}`)
		),
		TE.chain((response) =>
			TE.tryCatch(
				() => response.json(),
				(error) => new Error(`${error}`)
			)
		)
	)();

	if (E.isLeft(result)) {
		console.log('error');
		throw error(500, result.left.message);
	}

	const order = result.right;

	const trackFBConversionResult = await pipe(
		TE.Do,
		TE.bind('facebookConversion', () => TE.of(trackFacebookConversionUseCase({ order, ip })))
	)();

	return new Response(JSON.stringify(trackFBConversionResult), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
