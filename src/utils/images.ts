/**
 * Image utilities
 * 图片工具函数
 */

type ImageModule = () => Promise<{ default: any }>;
type ImageCollection = Record<string, ImageModule>;

/**
 * Load all local images
 * 加载所有本地图片
 *
 * @returns Collection of image modules
 */
const load = async (): Promise<ImageCollection> => {
	let images: ImageCollection = {};
	try {
		images = import.meta.glob('~/assets/images/**');
	} catch (e) {
		// continue regardless of error
	}
	return images;
};

let _images: Promise<ImageCollection> | undefined;

/**
 * Fetch all local images (cached)
 * 获取所有本地图片（缓存）
 *
 * @returns Collection of image modules
 */
export const fetchLocalImages = async (): Promise<ImageCollection> => {
	_images = _images || load();
	return await _images;
};

/**
 * Find an image by path
 * 根据路径查找图片
 *
 * @param imagePath - The image path (supports URLs or ~/assets aliases)
 * @returns Image module or URL string, or null if not found
 *
 * @example
 * ```typescript
 * const image = await findImage('~/assets/images/logo.svg');
 * const externalImage = await findImage('https://example.com/image.jpg');
 * ```
 */
export const findImage = async (imagePath: string | unknown): Promise<any> => {
	if (typeof imagePath !== 'string') {
		return null;
	}

	// Return external URLs as-is
	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
		return imagePath;
	}

	// Only process images using ~/assets alias
	if (!imagePath.startsWith('~/assets')) {
		return null;
	}

	const images = await fetchLocalImages();
	const key = imagePath.replace('~/', '/src/');

	return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
};
