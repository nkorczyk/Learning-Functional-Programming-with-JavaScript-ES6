module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'immutable',
  ],
  rules: {
    'immutable/no-mutation': 2,
    'arrow-parens': [2, 'as-needed'],
  },
};
