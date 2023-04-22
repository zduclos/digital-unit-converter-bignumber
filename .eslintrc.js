module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'ignorePatterns': ['**/*.test.ts'],
  'rules': {
    'indent': ['error', 4, { 'SwitchCase': 1 }],
    'valid-jsdoc': [2, {
      'prefer': { 'return': 'returns' }
    }]
  }
};
