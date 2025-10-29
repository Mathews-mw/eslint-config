import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				// ESLint 9: usa o tsconfig do projeto automaticamente (type-aware)
				projectService: true,
				// se precisar, no consumidor dá pra definir:
				// tsconfigRootDir: new URL('.', import.meta.url).pathname
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			// preset forte com type-checking
			...tsPlugin.configs['strict-type-checked'].rules,
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
			'@typescript-eslint/no-namespace': 'off',
		},
	},
];
