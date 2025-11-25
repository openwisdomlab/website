import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	// Global ignores
	{
		ignores: ['dist/**', 'node_modules/**', '.github/**'],
	},

	// Base config
	eslint.configs.recommended,

	// TypeScript configs
	...tseslint.configs.recommended,

	// Astro configs
	...eslintPluginAstro.configs.recommended,

	// General rules for all files
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',
		},
	},

	// TypeScript specific rules
	{
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
		},
	},

	// Astro file rules
	{
		files: ['**/*.astro'],
		rules: {
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		},
	},
];
