module.exports = {
  root: true,
  ignorePatterns: ['public'],
  plugins: ['eslint-plugin-utkusahin'],
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      extends: ['plugin:eslint-plugin-utkusahin/typescript'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    {
      files: ['**/*.js'],
      extends: ['plugin:eslint-plugin-utkusahin/javascript'],
    },
  ],
};
