/**
 * Site configuration types
 * 网站配置类型定义
 */

/**
 * Main site configuration
 * 网站主配置
 */
export interface SiteConfig {
	/** Site name */
	name: string;

	/** Site origin URL */
	origin: string;

	/** Base pathname for routing */
	basePathname: string;

	/** Whether to add trailing slashes to URLs */
	trailingSlash: boolean;

	/** SEO title */
	title: string;

	/** SEO description */
	description: string;

	/** Google Analytics ID */
	googleAnalyticsId: string | false;

	/** Google Site Verification ID */
	googleSiteVerificationId: string;
}

/**
 * Blog section configuration
 * 博客版块配置
 */
export interface BlogSectionConfig {
	/** Whether this section is disabled */
	disabled: boolean;

	/** URL pathname for this section */
	pathname: string;
}

/**
 * Blog configuration
 * 博客配置
 */
export interface BlogConfig {
	/** Whether blog is disabled */
	disabled: boolean;

	/** Number of posts per page */
	postsPerPage: number;

	/** Blog main section */
	blog: BlogSectionConfig;

	/** Individual post section */
	post: BlogSectionConfig;

	/** Category section */
	category: BlogSectionConfig;

	/** Tag section */
	tag: BlogSectionConfig;
}

/**
 * Permalink type
 */
export type PermalinkType = 'page' | 'post' | 'category' | 'tag';
