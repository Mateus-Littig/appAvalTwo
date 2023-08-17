module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'no-use-before-define': 'off',
    'max-len': 'off',
    'react/jsx-no-bind': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-empty': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
  },
};
