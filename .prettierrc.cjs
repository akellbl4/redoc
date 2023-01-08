module.exports = {
	useTabs: true,
	semi: false,
	singleQuote: true,
	arrowParens: 'always',
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.md',
			options: {
				singleQuote: false,
			},
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
