import { createHash } from 'crypto';

const hash = (s: string) => createHash('sha256').update(s).digest('hex');

const toConversionDto = ({ order, ip }: Command) => {
	const orderId = order.id;
	const email = hash(order.email);
	const firstName = hash(order.first_name);
	const lastName = hash(order.last_name);
	const time = Math.floor(new Date(order.created).getTime() / 1000);
	const value = order.costs.base_price.major_value;

	const dto = {
		event_name: 'Purchase',
		event_time: time,
		user_data: {
			em: [email],
			fn: [firstName],
			ln: [lastName],
			client_ip_address: ip,
			fbc: 'fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
			fbp: 'fb.1.1558571054389.1098115397'
		},
		custom_data: {
			order_id: orderId,
			currency: 'usd',
			value
		},
		event_source_url: 'http://localhost:3000/checkout',
		action_source: 'website'
	};

	return dto;
};

type Command = {
	order: any;
	ip: string;
};

export const trackFacebookConversionUseCase = (command: Command) => {
	const conversionDto = toConversionDto(command);

	return conversionDto;
};
