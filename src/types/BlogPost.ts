/**
 * Blog post types
 * 博客文章类型定义
 */

/**
 * Blog post frontmatter data
 * 博客文章元数据
 */
export interface BlogPostFrontmatter {
	/** Publish date */
	publishDate: Date | string;

	/** Draft status - if true, post won't be published */
	draft?: boolean;

	/** Canonical URL for republished content */
	canonical?: string;

	/** URL slug */
	slug?: string;

	/** Post title */
	title: string;

	/** Post description (for SEO and previews) */
	description: string;

	/** Featured image */
	image?: string;

	/** Post excerpt/summary */
	excerpt?: string;

	/** Post authors */
	authors?: string | string[];

	/** Post category */
	category?: string;

	/** Post tags */
	tags?: string[];

	/** Reading time in minutes */
	readingTime?: number;
}

/**
 * Normalized blog post
 * 标准化的博客文章对象
 */
export interface BlogPost {
	/** Unique identifier */
	id: string;

	/** Publish date */
	publishDate: Date | string;

	/** Draft status */
	draft?: boolean;

	/** Canonical URL */
	canonical?: string;

	/** URL slug */
	slug: string;

	/** Post title */
	title: string;

	/** Post description */
	description: string;

	/** Featured image */
	image?: string;

	/** Post content component */
	Content?: any;

	/** Post excerpt */
	excerpt?: string;

	/** Post authors */
	authors?: string | string[];

	/** Post category */
	category?: string;

	/** Post tags */
	tags?: string[];

	/** Reading time in minutes */
	readingTime?: number;
}

/**
 * Options for fetching latest posts
 */
export interface FetchLatestPostsOptions {
	/** Number of posts to fetch */
	count?: number;
}
