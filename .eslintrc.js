module.exports = {
  root: true,
  env: {}, // env config is based on project scope eg is it only node or node+browser
  extends: [
      '@mobile-reality/eslint-config/react-native', // base config based on project scope, XXX described below
      'plugin:prettier/recommended', // to include prettier rules in eslint
  ],
  // if jest is used jest config should be added to overrides section
  overrides: [
      {
          files: ['test/**/*.test.ts'], // glob pattern has to match test files
          extends: ['@mobile-reality/eslint-config/configs/jest'],
      },
  ],
};