import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

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
  {
    files: ['**/*.{js,vue,ts}'],
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
