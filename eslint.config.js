import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-unreachable": "error",
      "eqeqeq": ["error", "always"],
      "consistent-return": "warn",
    },
  },
];
