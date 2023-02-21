import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const extensions = ['.svelte', '.md']

const dev = process.env.NODE_ENV === 'development';

const config = {
	extensions: extensions,
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/Les-recette-de-Guilhem"
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: extensions
		})
	]
};

export default config;
