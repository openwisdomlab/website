export const SITE = {
	name: '猫头鹰实验室 | Open Wisdom Lab',

	origin: 'https://openwisdomlab.org',
	basePathname: '/',
	trailingSlash: false,

	title: '猫头鹰实验室 | Open Wisdom Lab - 开放、交叉、创新的学习空间',
	description: '猫头鹰实验室（OWL）是一个开放、包容、创新的实验室，致力于培养具有创新精神和跨学科思维的人才。我们强调开放性、交叉性、连接性、可持续性和前沿技术。',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
};

export const BLOG = {
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
