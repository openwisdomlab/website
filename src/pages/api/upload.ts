import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
	cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
	api_key: import.meta.env.CLOUDINARY_API_KEY,
	api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export const POST: APIRoute = async ({ request }) => {
	try {
		// Check if Cloudinary is configured
		if (
			!import.meta.env.CLOUDINARY_CLOUD_NAME ||
			!import.meta.env.CLOUDINARY_API_KEY ||
			!import.meta.env.CLOUDINARY_API_SECRET
		) {
			return new Response(
				JSON.stringify({
					success: false,
					error: 'Cloudinary is not configured. Please check your environment variables.',
				}),
				{
					status: 500,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		const formData = await request.formData();
		const file = formData.get('file') as File;

		if (!file) {
			return new Response(
				JSON.stringify({
					success: false,
					error: 'No file provided',
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Validate file type
		if (!ALLOWED_TYPES.includes(file.type)) {
			return new Response(
				JSON.stringify({
					success: false,
					error: `Invalid file type. Allowed types: ${ALLOWED_TYPES.join(', ')}`,
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Validate file size
		if (file.size > MAX_SIZE) {
			return new Response(
				JSON.stringify({
					success: false,
					error: `File size exceeds maximum limit of ${MAX_SIZE / 1024 / 1024}MB`,
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Convert file to buffer
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Upload to Cloudinary
		const uploadResult = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{
						folder: 'website-uploads',
						resource_type: 'image',
					},
					(error, result) => {
						if (error) reject(error);
						else resolve(result);
					}
				)
				.end(buffer);
		});

		return new Response(
			JSON.stringify({
				success: true,
				data: {
					url: (uploadResult as any).secure_url,
					publicId: (uploadResult as any).public_id,
					width: (uploadResult as any).width,
					height: (uploadResult as any).height,
					format: (uploadResult as any).format,
				},
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	} catch (error) {
		console.error('Upload error:', error);
		return new Response(
			JSON.stringify({
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error occurred',
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
};
