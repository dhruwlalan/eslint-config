module.exports = {
   plugins: ['prettier'],
   extends: ['eslint:recommended', 'prettier'],
   env: {
      es2021: true,
      browser: true,
      node: true,
   },
   ignorePatterns: ['node_modules'],
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: { impliedStrict: true },
   },
   rules: {
      'prettier/prettier': [
         'error',
         {
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 100,
         },
      ],
   },
};
