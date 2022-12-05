/*
 * @Author: Han
 * @Date: 2022-05-12 11:36:41
 * @LastEditors: Han
 * @LastEditTime: 2022-05-12 13:40:39
 * @FilePath: \GithubProject\apiadmin\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "@typescript-eslint/no-var-requires": [0],
    "prettier/prettier": [
      "error",
      {
        printWidth: 220,
        endOfLine: "auto",
      },
    ],
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "plugin:prettier/recommended"],
};
