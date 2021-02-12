const path = require("path");

module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  parser: "@typescript-eslint/parser",
  env: { browser: true, es6: true, node: true, jest: true },
  parserOptions: {
    project: [path.resolve(__dirname, "./tsconfig.json")],
    ecmaFeatures: {
      modules: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "jsx-a11y",
    "jsdoc",
    "react-hooks"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    // GLOBAL RULES
    // TypeScript Rules
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-empty-function": 2,
    "no-console": "warn",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowTypedFunctionExpressions: true, allowExpressions: true }
    ],
    // note you must disable the base rule as it can report incorrect errors
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    // React Rules
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": [0],
    "prettier/prettier": ["error", { singleQuote: false }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["src/**/*.spec.ts*", "src/**/*.stories.tsx"]
      }
    ],
    // LOCAL RULES
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/camelcase": 0
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
};
