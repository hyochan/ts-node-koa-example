module.exports =  {
  extends:  [
    'standard',
  ],
  parser:  '@typescript-eslint/parser',
  env: {
    "browser": true,
    "jest": true
  },
  parserOptions:  {
    ecmaVersion:  2017,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules:  {
    "no-unused-vars": 0,
    "comma-dangle": ["error", "always-multiline"],
    "semi": [2, "always"],
    "arrow-parens": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "no-new-object": "error",
    "no-array-constructor": "error"
  },
};
