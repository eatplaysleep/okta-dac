/** @format */

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:prettier-vue/recommended',
		'prettier',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	settings: {
		'prettier-vue': {
			// Settings for how to process Vue SFC Blocks
			SFCBlocks: {
				/**
				 * Use prettier to process `<template>` blocks or not
				 *
				 * If set to `false`, you may need to enable those vue rules that are disabled by `eslint-config-prettier`,
				 * because you need them to lint `<template>` blocks
				 *
				 * @default true
				 */
				template: true,

				/**
				 * Use prettier to process `<script>` blocks or not
				 *
				 * If set to `false`, you may need to enable those rules that are disabled by `eslint-config-prettier`,
				 * because you need them to lint `<script>` blocks
				 *
				 * @default true
				 */
				script: true,

				/**
				 * Use prettier to process `<style>` blocks or not
				 *
				 * @default true
				 */
				style: true,

				// Settings for how to process custom blocks
				customBlocks: {
					// Treat the `<docs>` block as a `.markdown` file
					docs: { lang: 'markdown' },

					// Treat the `<config>` block as a `.json` file
					config: { lang: 'json' },

					// Treat the `<module>` block as a `.js` file
					module: { lang: 'js' },

					// Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
					comments: false,

					// Other custom blocks that are not listed here will be ignored
				},
			},
			/**
			 * Use prettierrc for prettier options or not
			 *
			 * @default true
			 */
			usePrettierrc: true,
		},
		rules: {
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		},
	},
};
