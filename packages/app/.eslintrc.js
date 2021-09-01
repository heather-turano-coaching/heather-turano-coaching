module.exports = {
  extends: ["@htc/eslint-config/next"],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        peerDependencies: true,
        packageDir: [path.join(__dirname, "./packages/app")]
      }
    ]
  }
};
