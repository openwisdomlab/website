/**
 * Site and Blog configuration
 * 网站和博客配置
 */

import type { SiteConfig, BlogConfig } from '~/types';

/**
 * Main site configuration
 * 网站主配置
 */
export const SITE: SiteConfig = {
	name: '猫头鹰实验室 | Open Wisdom Lab',

	origin: 'https://openwisdomlab.org',
	basePathname: '/',
	trailingSlash: false,

	title: '猫头鹰实验室 | Open Wisdom Lab - 未来科技创新空间',
	description:
		'猫头鹰实验室（OWL）是一个充满想象力、创造力和探索乐趣的创新教育空间。基于创生教育理念，我们致力于培养AI时代具有创新精神和跨学科思维的未来人才。',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
};

/**
 * Blog configuration
 * 博客配置
 */
export const BLOG: BlogConfig = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
