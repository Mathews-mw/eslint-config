import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

// Base comum (JS/TS-agnostic)
export default [
  {
    ignores: [
      'dist',
      'build',
      'coverage',
      'out',
      '**/*.min.js',
      '**/node_modules'
    ]
  },
  {
    rules: {
      camelcase: "off",
      "no-undef": "off",
      "prefer-const": "off",
      "dot-notation": "off",
      "no-useless-constructor": "off",
      "no-trailing-spaces": "error",
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      eqeqeq: ['error', 'smart']
    }
  },
  eslintPluginPrettierRecommended
];
