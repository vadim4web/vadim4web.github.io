import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Apply to all JS, MJS, CJS, and Vue files
  { files: ["**/*.{js,mjs,cjs,vue}"] },

  // Set language options
  { languageOptions: { globals: globals.browser } },

  // JavaScript recommended rules
  pluginJs.configs.recommended,

  // Vue essential rules
  pluginVue.configs["flat/essential"],

  // Prettier integration
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: true,
          arrowParens: "avoid",
          experimentalTernaries: true,
          useTabs: true
        },
      ],
    },
  },

  // Vue-specific rules
  {
    rules: {
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION", // is
            "LIST_RENDERING", // v-for
            "CONDITIONALS", // v-if, v-else-if, v-else, v-show, v-cloak
            "RENDER_MODIFIERS", // v-pre, v-once
            "GLOBAL", // id, ref
            "UNIQUE", // key, slot
            "BINDING", // v-model, :binding
            "OTHER_ATTR", // class, style
            "EVENTS", // @click, @input
            "CONTENT", // v-text, v-html
          ],
          alphabetical: true,
        },
      ],
    },
  },
];
