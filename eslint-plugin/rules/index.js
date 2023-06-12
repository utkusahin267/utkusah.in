const javascript = require('./javascript');
const prettier = require('./prettier');


module.exports = {
  'import/no-unresolved': 'off',
  '@typescript-eslint/no-throw-literal': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    { checksVoidReturn: false },
  ],
  '@typescript-eslint/return-await': ['error', 'always'],
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'array-simple',
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public',
    },
  ],
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/member-delimiter-style': [
    'off',
    {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    },
  ],
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/semi': ['off', null],
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      path: 'always',
      types: 'prefer-import',
      lib: 'always',
    },
  ],
  '@typescript-eslint/type-annotation-spacing': 'off',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/await-thenable': ['error'],
  '@typescript-eslint/no-for-in-array': ['error'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  '@typescript-eslint/prefer-includes': ['error'],
  '@typescript-eslint/prefer-regexp-exec': ['off'],
  '@typescript-eslint/prefer-string-starts-ends-with': ['off'],
  '@typescript-eslint/unbound-method': ['off'],
  '@typescript-eslint/adjacent-overload-signatures': ['error'],
  '@typescript-eslint/ban-ts-comment': ['error'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: ['class', 'interface'],
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/consistent-type-assertions': ['error'],
  '@typescript-eslint/explicit-function-return-type': ['off'],
  '@typescript-eslint/explicit-module-boundary-types': ['off'],
  '@typescript-eslint/no-array-constructor': ['error'],
  '@typescript-eslint/no-empty-function': ['error'],
  '@typescript-eslint/no-empty-interface': ['error'],
  '@typescript-eslint/no-inferrable-types': ['error'],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['off'],
  '@typescript-eslint/no-this-alias': ['error'],
  '@typescript-eslint/no-var-requires': ['error'],
  '@typescript-eslint/prefer-namespace-keyword': ['error'],
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        '{}': false,
        object: false,
      },
      extendDefaults: true,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-shadow': [
    'error',
    {
      hoist: 'all',
    },
  ],
  'react-hooks/exhaustive-deps': ['error'],
  'react-hooks/rules-of-hooks': ['error'],
  'import/newline-after-import': 'error',
  'import/no-cycle': 'warn',
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [
        {
          pattern: '{.,..}/**/*.?(s)css',
          group: 'index',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
    },
  ],
  'import/first': 'error',
  ...javascript,
  ...prettier,
};
