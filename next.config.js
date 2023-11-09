/** @type {import('next').NextConfig} */
const nextConfig = {
	target: 'serverless',
	images: {
		domains: ['files.edgestore.dev'],
	},
};

module.exports = nextConfig;
