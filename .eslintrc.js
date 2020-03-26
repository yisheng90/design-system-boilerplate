module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  },
  ignorePatterns: [
    "*.json",
    "node_modules/",
    "configs",
    "webpack.config.js",
    "babel.config.js"
  ],
  rules: {
    "@typescript-eslint/indent": [2, 2],
    "import/extensions": [2, "never"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "import/no-extraneous-dependencies": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"]
      }
    ]
  },
  overrides: [
    {
      files: ["*.{test,spec,story,stories}.ts{,x}"],
      rules: {
        "import/no-extraneous-dependencies": ["error", { packageDir: "./" }]
      }
    }
  ]
};
