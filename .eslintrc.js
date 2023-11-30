module.exports = {
  root: true,
  extends: ['plugin:sonarjs/recommended', '@react-native-community'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'typescript',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        endOfLine: 'auto',
      },
    ],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },

  plugins: ['simple-import-sort', 'sonarjs'],
};