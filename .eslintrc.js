module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier' : 'error',
    'react/jsx-filename-extension' : [
      'warn',
      {extensions : ['jsx','js']}
    ],
    "react/prefer-stateless-function": [0, { "ignoreComponents": true }],
    'react/state-in-constructor': 'off',
    "react/static-property-placement": [0,'static public field'],
    'import/prefer-default-export' : 'off'
  },
};
