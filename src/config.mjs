export const SITE = {
	name: '猫头鹰实验室 | Open Wisdom Lab',

	origin: 'https://openwisdomlab.org',
	basePathname: '/',
	trailingSlash: false,

	title: '猫头鹰实验室 | Open Wisdom Lab - 科技界的奇妙乐园',
	description: '猫头鹰实验室（OWL）是科技界的"奇妙乐园"，一个充满想象力、创造力和探索乐趣的创新教育空间。基于创生教育理念，我们致力于培养AI时代具有创新精神和跨学科思维的未来人才。',

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
