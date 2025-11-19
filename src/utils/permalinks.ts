/**
 * Permalink and URL utilities
 * 永久链接和 URL 工具函数
 */

import slugify from 'limax';
import type { PermalinkType } from '~/types';
import { SITE, BLOG } from '~/config';

/**
 * Trim a string of a specific character
 * 修剪字符串中的特定字符
 */
const trim = (str: string, ch: string): string => {
	let start = 0;
	let end = str.length || 0;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};

/**
 * Trim slashes from a string
 * 移除字符串首尾的斜杠
 */
const trimSlash = (s: string): string => trim(trim(s, '/'), '/');

/**
 * Create a path from multiple parameters
 * 从多个参数创建路径
 */
const createPath = (...params: string[]): string => {
	const paths = params.filter((el) => !!el).join('/');
	return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const basePathname = trimSlash(SITE.basePathname);

/**
 * Clean and slugify text
 * 清理并生成 slug
 *
 * @param text - The text to slugify
 * @returns Slugified text
 */
export const cleanSlug = (text: string): string => slugify(trimSlash(text));

export const BLOG_BASE = cleanSlug(BLOG?.blog?.pathname || '');
export const POST_BASE = cleanSlug(BLOG?.post?.pathname || '');
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname || '');
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname || '');

/**
 * Get canonical URL for a path
 * 获取路径的规范 URL
 *
 * @param path - The path
 * @returns Canonical URL
 */
export const getCanonical = (path: string = ''): URL => new URL(path, SITE.origin);

/**
 * Get permalink for a slug
 * 获取 slug 的永久链接
 *
 * @param slug - The slug
 * @param type - The permalink type
 * @returns Permalink string
 */
export const getPermalink = (slug: string = '', type: PermalinkType = 'page'): string => {
	const _slug = cleanSlug(slug);

	switch (type) {
		case 'category':
			return createPath(basePathname, CATEGORY_BASE, _slug);

		case 'tag':
			return createPath(basePathname, TAG_BASE, _slug);

		case 'post':
			return createPath(basePathname, POST_BASE, _slug);

		case 'page':
		default:
			return createPath(basePathname, _slug);
	}
};

/**
 * Get home permalink
 * 获取首页永久链接
 *
 * @returns Home permalink
 */
export const getHomePermalink = (): string => {
	const permalink = getPermalink();
	return permalink !== '/' ? permalink + '/' : permalink;
};

/**
 * Get relative link
 * 获取相对链接
 *
 * @param link - The link
 * @returns Relative link
 */
export const getRelativeLink = (link: string = ''): string => {
	return createPath(basePathname, trimSlash(link));
};

/**
 * Get blog permalink
 * 获取博客永久链接
 *
 * @returns Blog permalink
 */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);
