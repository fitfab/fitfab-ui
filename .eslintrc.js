module.exports = {
    // tell ESLint to use the TypeScript parser.
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        { default: 'generic' }
      ],
    },
  }