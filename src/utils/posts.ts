/**
 * Blog post utilities
 * 博客文章工具函数
 */

import type { BlogPost, FetchLatestPostsOptions } from '~/types';

/**
 * Normalize a blog post
 * 标准化博客文章数据
 *
 * @param post - Raw post data from import.meta.glob
 * @returns Normalized blog post
 */
const getNormalizedPost = async (post: any): Promise<BlogPost> => {
	const { frontmatter, Content, file } = post;
	const ID = file.split('/').pop().split('.').shift();

	return {
		id: ID,

		publishDate: frontmatter.publishDate,
		draft: frontmatter.draft,

		canonical: frontmatter.canonical,
		slug: frontmatter.slug || ID,

		title: frontmatter.title,
		description: frontmatter.description,
		image: frontmatter.image,

		Content: Content,
		// or 'body' in case you consume from API

		excerpt: frontmatter.excerpt,
		authors: frontmatter.authors,
		category: frontmatter.category,
		tags: frontmatter.tags,
		readingTime: frontmatter.readingTime,
	};
};

/**
 * Load all blog posts
 * 加载所有博客文章
 *
 * @returns Array of normalized blog posts
 */
const load = async (): Promise<BlogPost[]> => {
	const posts = import.meta.glob(['~/../data/blog/**/*.md', '~/../data/blog/**/*.mdx'], {
		eager: true,
	});

	const normalizedPosts = Object.keys(posts).map(async (key) => {
		const post = await posts[key];
		return await getNormalizedPost(post);
	});

	const results = (await Promise.all(normalizedPosts))
		.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
		.filter((post) => !post.draft);

	return results;
};

let _posts: Promise<BlogPost[]> | undefined;

/**
 * Fetch all blog posts (cached)
 * 获取所有博客文章（缓存）
 *
 * @returns Array of blog posts
 *
 * @example
 * ```typescript
 * const posts = await fetchPosts();
 * console.log(posts.length);
 * ```
 */
export const fetchPosts = async (): Promise<BlogPost[]> => {
	_posts = _posts || load();

	return await _posts;
};

/**
 * Find posts by their IDs
 * 根据 ID 查找文章
 *
 * @param ids - Array of post IDs
 * @returns Array of matching posts
 *
 * @example
 * ```typescript
 * const posts = await findPostsByIds(['post-1', 'post-2']);
 * ```
 */
export const findPostsByIds = async (ids: string[]): Promise<BlogPost[]> => {
	if (!Array.isArray(ids)) return [];

	const posts = await fetchPosts();

	return ids.reduce<BlogPost[]>(function (r, id) {
		posts.some(function (post) {
			return id === post.id && r.push(post);
		});
		return r;
	}, []);
};

/**
 * Find latest blog posts
 * 查找最新的博客文章
 *
 * @param options - Fetch options
 * @returns Array of latest posts
 *
 * @example
 * ```typescript
 * const latestPosts = await findLatestPosts({ count: 3 });
 * ```
 */
export const findLatestPosts = async ({ count }: FetchLatestPostsOptions): Promise<BlogPost[]> => {
	const _count = count || 4;
	const posts = await fetchPosts();

	return posts ? posts.slice(_count * -1) : [];
};
