const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/app.scss";`,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: '@svgr/webpack',
		})
		return config
	}
}

module.exports = nextConfig
