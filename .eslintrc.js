module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "next/core-web-vitals", "prettier", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  rules: {
    // Typescript Overrides
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
      ignoreRestSiblings: true
    }],
    // Next Overrides
    "@next/next/no-img-element": 0,
    // Import Overrides
    "import/no-anonymous-default-export": 0,
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: ["src/**/*.spec.ts*", "src/**/*.stories.tsx"]
    }]
  }
};