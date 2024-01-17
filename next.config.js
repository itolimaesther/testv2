/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.imagin.studio"],
	},
	assetPrefix: '/.',
	output: 'export',
};

module.exports = nextConfig;
