module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: [
		'standard',
		'@nuxtjs/eslint-config-typescript',
		'plugin:prettier/recommended',
	],
	plugins: [],
	rules: {
		'@typescript-eslint/no-unused-vars': 1,
	},
}
