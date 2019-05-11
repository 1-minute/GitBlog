module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'eslint-config-prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'import/order': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
  },
};
