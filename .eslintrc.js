module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
  ],
  env: {
    browser: true,
    jquery: true,
    mocha: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'jest'],
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  ignorePatterns: [
    '*.json',
    'node_modules/',
    'configs',
    'webpack.config.js',
    'babel.config.js',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', 'ts'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: '@app/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.{test,spec,story,stories}.{ts,tsx,mdx}'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
      },
    },
  ],
}
