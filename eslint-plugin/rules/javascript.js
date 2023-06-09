module.exports = {
  'arrow-body-style': 'error',
  'arrow-parens': ['off', 'always'],
  'brace-style': ['off', 'off'],
  camelcase: 'off',
  'comma-dangle': 'off',
  complexity: 'off',
  'constructor-super': 'error',
  curly: 'error',
  'dot-notation': 'error',
  'eol-last': 'off',
  eqeqeq: ['error', 'smart'],
  'guard-for-in': 'error',
  'id-blacklist': ['error', 'any', 'String', 'Undefined'],
  'id-match': 'error',
  'linebreak-style': 'off',
  'max-classes-per-file': 'off',
  'max-len': 'off',
  'new-parens': 'off',
  'newline-per-chained-call': 'off',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-cond-assign': 'error',
  'no-console': 'warn',
  'no-debugger': 'warn',
  'no-empty': 'error',
  'no-eval': 'error',
  'no-extra-semi': 'off',
  'no-fallthrough': 'off',
  'no-invalid-this': 'off',
  'no-irregular-whitespace': 'off',
  'no-multiple-empty-lines': 'off',
  'no-new-wrappers': 'error',
  'no-shadow': 'off',
  'no-throw-literal': 'error',
  'no-trailing-spaces': 'off',
  'no-undef-init': 'error',
  'no-underscore-dangle': 'off',
  'no-unsafe-finally': 'error',
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': 'error',
  'object-shorthand': 'error',
  'one-var': ['error', 'never'],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'break',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'if',
    },
    {
      blankLine: 'always',
      prev: 'if',
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'for',
    },
    {
      blankLine: 'always',
      prev: 'for',
      next: '*',
    },
  ],
  'quote-props': 'off',
  radix: 'off',
  'space-before-function-paren': 'off',
  'space-in-parens': ['off', 'never'],
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        markers: ['/'],
        exceptions: ['-', '+'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    },
  ],
  'use-isnan': 'error',
  'valid-typeof': 'off',
  'require-await': ['off'],
  'no-var': ['error'],
  'prefer-const': ['error'],
  'prefer-promise-reject-errors': 'error',
  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],
  'no-array-constructor': ['off'],
  'no-empty-function': ['off'],
  'no-use-before-define': ['off'],
  'no-restricted-imports': [
    'error',
    {
      name: 'react-spring',
      message:
        'Please use react-spring/web.cjs instead to ensure IE11 support.',
    },
  ],
};
