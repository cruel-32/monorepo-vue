import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';

const compat = new FlatCompat();

export default [
  ...pluginVue.configs['flat/essential'],
  ...compat.extends('@vue/eslint-config-typescript/recommended'),
  ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,vue,ts}'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    ignores: ['**/dist/', '**/node_modules/'],
  },
  {
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
      'typescript-eslint': tseslint.plugin,
    },
  },
  {
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off',
    },
  },
  eslintPluginPrettierRecommended,
  // Add your custom rules here
];
