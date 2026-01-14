// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const defaultBase =
	process.env.GITHUB_ACTIONS === 'true' && repoName
		? `/${repoName}/`
		: '/';

export default defineConfig({
	site: 'https://michaelbeijer.co.uk',
	base: process.env.ASTRO_BASE ?? defaultBase,
	integrations: [mdx(), sitemap()],
});
