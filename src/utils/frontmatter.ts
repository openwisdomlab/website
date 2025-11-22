/**
 * Frontmatter utilities for MDX
 * MDX 前置元数据工具函数
 */

import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { Root } from 'mdast';

/**
 * Remark plugin to calculate reading time
 * 计算阅读时间的 Remark 插件
 *
 * This plugin adds a `readingTime` field to the frontmatter
 * based on the content length.
 *
 * @returns Remark transformer function
 *
 * @example
 * ```typescript
 * // In astro.config.mjs
 * export default defineConfig({
 *   markdown: {
 *     remarkPlugins: [remarkReadingTime],
 *   },
 * });
 * ```
 */
export function remarkReadingTime() {
	return function (tree: Root, { data }: any) {
		const text = toString(tree);
		const readingTime = Math.ceil(getReadingTime(text).minutes);

		data.astro.frontmatter.readingTime = readingTime;
	};
}
