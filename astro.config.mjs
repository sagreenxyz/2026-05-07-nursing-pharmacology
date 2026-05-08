// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPagesRepo = repo.endsWith('.github.io');

const site = process.env.ASTRO_SITE
	?? (process.env.GITHUB_REPOSITORY_OWNER
		? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
		: undefined);

const base = process.env.ASTRO_BASE
	?? (isUserOrOrgPagesRepo ? '/' : repo ? `/${repo}/` : '/');

export default defineConfig({
	site,
	base,
	vite: {
		plugins: [tailwindcss()],
	},
});
