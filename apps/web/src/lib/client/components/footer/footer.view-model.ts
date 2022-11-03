import { CONFIG } from '$client/constants';

const businessName = CONFIG.BUSINESS.NAME;
const year = new Date().getFullYear();

export const useFooterViewModel = () => {
	return {
		businessName,
		year
	};
};
