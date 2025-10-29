import base from './base.js';
import ts from './typescript.js';

import n from 'eslint-plugin-n';
import promise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  ...base,
  ...ts,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    plugins: {
      n,
      promise,
      import: importPlugin,
      unicorn: eslintPluginUnicorn,
    },
    settings: {
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
      
      // Recomendados
      ...n.configs['flat/recommended-script'].rules,
      ...promise.configs['flat/recommended'].rules,

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
      'import/newline-after-import': 'warn',

      // Unicorn (seleção leve, sem ser chato)
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/no-array-push-push': 'warn',
      'unicorn/filename-case': 'off'
    }
  }
];
