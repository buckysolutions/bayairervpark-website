module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
		'plugin:chai-friendly/recommended',
	],
	env: {
		browser: true,
		'jest/globals': true,
	},
	rules: {
		'@wordpress/no-unsafe-wp-apis': 'off',
		'import/no-unresolved': [
			2,
			{ ignore: [ '\@wpex\/.*$' ] },
		],
	},
};
