import pluginVue from 'eslint-plugin-vue'
export default [
	// add more generic rulesets here, such as:
	// js.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	// ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
	{
		rules: {
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/multiline-html-element-content-newline': 'off',
			'vue/html-indent': 'off',
			'vue/html-self-closing': 'off',

			'vue/require-default-prop': 'off',
			'vue/attributes-order': [
				'error',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT',
					],
					alphabetical: true,
				},
			],
		},
	},
]
