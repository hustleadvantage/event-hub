import type { CSSProps } from 'styles';

type UseHeadingProps = {
	level: CSSProps.HeadingLevel;
};

const getHtmlTag = (level: CSSProps.HeadingLevel) => {
	switch (level) {
		case 1:
			return 'h1';
		case 2:
			return 'h2';
		case 3:
			return 'h3';
		case 4:
			return 'h4';
		case 5:
			return 'h5';
		default:
			return 'h6';
	}
};

export const useHeading = ({ level }: UseHeadingProps) => {
	const tag = getHtmlTag(level);

	return {
		tag
	};
};
