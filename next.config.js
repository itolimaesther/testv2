/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.imagin.studio"],
	},
	assetPrefix: '/.',
	output: 'export',
	exportPathMap: function () {
		return {
		  '/': { page: '/' },
		  // Add other paths as needed
		};
	  },
};

module.exports = nextConfig;
