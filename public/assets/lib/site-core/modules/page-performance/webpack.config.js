const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const LibraryExportDefaultPlugin = require( '@wordpress/library-export-default-webpack-plugin' );

module.exports = {
	...defaultConfig,

	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
		},
	},

	entry: {
		main: './src/index.js',
	},

	plugins: [
		...defaultConfig.plugins,
		new LibraryExportDefaultPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				loader: [ 'to-string-loader', 'css-loader' ],
			},
			...defaultConfig.module.rules.filter(
				( loader ) => ! loader.test.toString().includes( 'css' )
			),
		],
	},
};
