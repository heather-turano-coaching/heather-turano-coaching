module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: ["@htc/typescript/tsconfig.next.json"]
  },
  rules: {
    // Typescript Overrides
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true }
    ],
    "@typescript-eslint/triple-slash-reference": 0,
    // Next Overrides
    "@next/next/no-img-element": 0,
    // Import Overrides
    "import/no-anonymous-default-export": 0,
    "import/no-extraneous-dependencies": ["error"]
  }
};
