import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
// import globals from 'globals';

export default [
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],

  {
    ignores: [
      "dist/**/*",
      "/**/*",
      "!src/**/*",
    ],
    rules: {
      "vue/require-prop-types": 0,
			"vue/attributes-order": ["error", {
				"order": [
					"DEFINITION",
					"LIST_RENDERING",
					"CONDITIONALS",
					"RENDER_MODIFIERS",
					"GLOBAL",
					["UNIQUE", "SLOT"],
					"TWO_WAY_BINDING",
					"OTHER_DIRECTIVES",
					"OTHER_ATTR",
					"EVENTS",
					"CONTENT"
				],
				"alphabetical": false
			}],
    },
  }
];