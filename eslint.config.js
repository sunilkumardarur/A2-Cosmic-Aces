import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'dist/',
      'public/',
      'reference/',
      'art/',
      'data/',
      'docs/',
      'Claude outputs/',
      'test-results/',
      'playwright-report/',
    ],
  },
  ...tseslint.configs.strict,
  {
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
