module.exports = {
    parser: '@typescript-eslint/parser',
    // tell ESLint to use the TypeScript parser.
    parserOptions: {
        ecmaVersion: 2020,
        // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',
        // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
    ],
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic',
            },
        ],
        'react/prop-types': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
    },
}
