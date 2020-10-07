module.exports = {
  extends: ["@heather-turano-coaching/eslint-config"],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  root: true,
  rules: {
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0
  }
};
