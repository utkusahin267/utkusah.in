const rules = require('./rules');
const javascript = require('./rules/javascript');
const prettier = require('./rules/prettier');

module.exports = {
  configs: {
    typescript: {
      env: {
        browser: true,
        node: true,
      },
      extends: [
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:prettier-plugin-tailwindcss',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint/eslint-plugin',
        'import',
        'react-hooks',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules,
    },
    javascript: {
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest"
      },
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      rules: {
        ...javascript,
        ...prettier,
      },
    },
  },
};
