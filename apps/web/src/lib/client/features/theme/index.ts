import { CONFIG } from '$client/constants';
import { createCssTokensStyleTagPartial } from './use-cases';

const { COLORS } = CONFIG.THEME;

const colors = { primary: COLORS.PRIMARY, secondary: COLORS.SECONDARY, accent: COLORS.ACCENT };

const createCssTokensStyleTag = createCssTokensStyleTagPartial({ colors });

export const Theme = {
	createCssTokensStyleTag
};
