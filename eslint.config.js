import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';

export default [
  {
    ignores: [
      "dist/**/*",
      "/**/*", // This seems redundant and could exclude everything, double-check this
      "!src/**/*",
      "vite.config.js",
    ],
  },
  eslint.configs.recommended, // ESLint's recommended rules
  eslintConfigPrettier, // Prettier integration to disable conflicting rules
  eslintPluginVue.configs['flat/recommended'], // Vue-specific rules
  {
    rules: {
      "vue/require-prop-types": "off",
      "vue/attributes-order": [
        "error",
        {
          order: [
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
            "CONTENT",
          ],
          alphabetical: false,
        },
      ],
      "vue/html-indent": [
        "error",
        "tab",
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
    },
  },
];
