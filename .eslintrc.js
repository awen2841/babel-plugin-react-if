module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended'],
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'func-names': 0,
    'no-unused-expressions': 0,
    'no-constant-condition': 0,
    'wrap-iife': 0,
    'vars-on-top': 0,
    'new-cap': 0,
    'global-require': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
  },
  env: {
    mocha: true,
  },
};
