module.exports = {
  extends: "@heather-turano-coaching/eslint-config",
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  root: true,
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.stories.tsx"] }
    ]
  }
};
