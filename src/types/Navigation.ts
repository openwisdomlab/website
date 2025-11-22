/**
 * Navigation types
 * 导航类型定义
 */

/**
 * Navigation link item
 * 导航链接项
 */
export interface NavigationLink {
	/** Link label (translation key or text) */
	label: string;

	/** Link href/path */
	href: string;

	/** Icon name (optional) */
	icon?: string;

	/** Whether link opens in new tab */
	target?: '_blank' | '_self';

	/** Child navigation items */
	children?: NavigationLink[];
}

/**
 * Breadcrumb item
 * 面包屑导航项
 */
export interface BreadcrumbItem {
	/** Breadcrumb label */
	label: string;

	/** Breadcrumb href */
	href?: string;
}
