import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const extensions = ['.svelte', '.md']

const config = {
	extensions: extensions,
	kit: {
		adapter: adapter()
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: extensions
		})
	]
};

export default config;
