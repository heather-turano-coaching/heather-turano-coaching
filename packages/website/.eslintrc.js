module.exports = {
  extends: ["@htc/eslint-config/next"],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [path.join(__dirname, "./packages/app")]
      }
    ]
  }
};
