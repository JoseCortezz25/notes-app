module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    semi: [2, 'always'],
    'space-before-function-paren': ['error', 'never'],
    camelcase: [
      'error',
      {
        allow: ['api_url', 'other_identifier']
      }
    ],
    'no-unused-vars': 'off',
    'comma-dangle': [
      'error',
      {
        functions: 'never'
      }
    ],
    'no-debugger': 'off'
  }
};
