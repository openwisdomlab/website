/**
 * Directory and path utilities
 * 目录和路径工具函数
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Get the project root directory
 * 获取项目根目录
 *
 * @returns Project root directory path
 */
export const getProjectRootDir = (): string => {
	const mode = import.meta.env.MODE;

	return mode === 'production' ? path.join(__dirname, '../') : path.join(__dirname, '../../');
};

const __srcFolder = path.join(getProjectRootDir(), '/src');

/**
 * Get relative URL by file path
 * 根据文件路径获取相对 URL
 *
 * @param filepath - The file path
 * @returns Relative URL or null
 */
export const getRelativeUrlByFilePath = (filepath: string | undefined): string | null => {
	if (filepath) {
		return filepath.replace(__srcFolder, '');
	}

	return null;
};
