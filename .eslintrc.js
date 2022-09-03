/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "arrow-body-style": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "DO NOT DECLARE ENUM",
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "object", "type", "index"],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  plugins: ["jsx-a11y"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};

module.exports = config;
