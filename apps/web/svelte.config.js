import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		alias: {
			$client: 'src/lib/client',
			'$client/*': 'src/lib/client/*',

			$server: 'src/lib/server',
			'$server/*': 'src/lib/server/*',

			$shared: 'src/lib/shared',
			'$shared/*': 'src/lib/shared/*'
		},
		outDir: path.resolve(__dirname, 'build')
	}
};

export default config;
