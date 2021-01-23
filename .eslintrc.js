module.exports = {
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native', 'testing-library'],
  globals: {
    console: true,
    window: true,
    __DEV__: true,
    fetch: true,
  },
  rules: {
    indent: 0,
    'space-before-function-paren': 0,
    'no-console': 2,
    'no-nested-ternary': 2,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 1,
    'react/jsx-no-bind': 2,
    'prettier/prettier': 0,
    'jsx-quotes': ['warn', 'prefer-single'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/prop-types': [
      'error',
      { ignore: ['children', 'navigation', 'route'] },
    ],
    'react/jsx-handler-names': 0,
    'comma-dangle': [
      1,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'testing-library/no-debug': [
      'error',
      { renderFunctions: ['renderWithProviders'] },
    ],
  },
}
