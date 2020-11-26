module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.lint.json',
		extraFileExtensions: ['.json'],
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'react'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/member-delimiter-style': [
			2,
			{
				multiline: {
					delimiter: 'none',
					requireLast: false,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/ban-ts-comment': 2,
		'@typescript-eslint/await-thenable': 2,
		'@typescript-eslint/ban-types': 2,
		'@typescript-eslint/class-literal-property-style': 2,
		'@typescript-eslint/naming-convention': 2,
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				varsIgnorePattern: 'h',
			},
		],
		'@typescript-eslint/no-empty-interface': 0,
		'no-mixed-spaces-and-tabs': 0,
		'@typescript-eslint/no-explicit-any': 2,
		'react/jsx-uses-vars': 2,
		'react/jsx-uses-react': 2,
		'no-restricted-syntax': [
			// casts are NOT ALLOWED!
			'error',
			"TSAsExpression[typeAnnotation.typeName.name!='const']",
		],
	},
	settings: {
		react: {
			pragma: 'h',
		},
	},
}
