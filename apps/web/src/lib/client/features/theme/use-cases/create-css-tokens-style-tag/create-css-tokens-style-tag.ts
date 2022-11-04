type CreateCssTokensStyleTagProps = {
	colors: {
		primary: string;
		secondary: string;
		accent: string;
	};
};

export const createCssTokensStyleTagPartial =
	({ colors }: CreateCssTokensStyleTagProps) =>
	() => {
		const { primary, secondary, accent } = colors;

		return `
      <style>
        :root {
          --color-primary: var(--${primary}-7-hsl);
          --color-primary-dark: var(--${primary}-8-hsl);

          --color-secondary: var(--${secondary}-7-hsl);
          --color-secondary-dark: var(--${secondary}-8-hsl);

          --color-accent: var(--${accent}-7-hsl);
          --color-accent-dark: var(--${accent}-8-hsl);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --color-primary: var(--${primary}-4-hsl);
            --color-primary-dark: var(--${primary}-5-hsl);

            --color-secondary: var(--${secondary}-4-hsl);
            --color-secondary-dark: var(--${secondary}-5-hsl);

            --color-accent: var(--${accent}-4-hsl);
            --color-accent-dark: var(--${accent}-5-hsl);
          }
        }
      </style>
  `;
	};
