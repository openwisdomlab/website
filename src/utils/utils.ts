/**
 * General utility functions
 * 通用工具函数
 */

/**
 * Format a date for display
 * 格式化日期用于显示
 *
 * @param date - The date to format
 * @returns Formatted date string
 *
 * @example
 * ```typescript
 * getFormattedDate(new Date()) // "Nov 19, 2025"
 * ```
 */
export const getFormattedDate = (date: Date | string): string =>
	date
		? new Date(date).toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';
