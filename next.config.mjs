/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60 * 60 * 24,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lakickz.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'atimg.sonyunara.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'm.darles.co.kr',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
