module.exports = {
  extends: ["@heather-turano-coaching/eslint-config"],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  root: true,
  rules: {
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/camelcase": 0
  }
};
