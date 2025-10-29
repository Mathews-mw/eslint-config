import base from './base.js';
import ts from './typescript.js';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  ...base,
  ...ts,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'react-refresh': reactRefresh
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: { alwaysTryTypes: true } }
    },
    rules: {
      //prettier
      "prettier/prettier": [
				"error",
				{
					singleQuote: true,
					printWidth: 120,
					tabWidth: 2,
					useTabs: true,
					semi: true,
					arrowParens: "always",
					trailingComma: "es5",
					bracketSpacing: true,
					bracketLine: true,
					endOfLine: "auto",
					arrowFunctionParens: "always",
				},
			],
      
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // React 17+ (JSX runtime automático)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Import hygiene
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'type'
          ],
          alphabetize: { order: 'asc' },
          'newlines-between': 'always'
        }
      ],

      // Vite + HMR (quando aplicável, não custa manter)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
];
