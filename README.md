# @mw/eslint-config (Flat)

**ESLint ≥ 9** · Presets para **Node**, **React** e **Next.js**, todos com **TypeScript**.

## Instalação (pnpm)

Instale apenas os peers do preset que for usar.

**Base + TypeScript (comum):**
```bash
pnpm add -D eslint typescript     @typescript-eslint/parser @typescript-eslint/eslint-plugin     eslint-plugin-import eslint-import-resolver-typescript
```

**Node:**
```bash
pnpm add -D eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn
```

**React:**
```bash
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks     eslint-plugin-jsx-a11y eslint-plugin-react-refresh
```

**Next.js:**
```bash
pnpm add -D eslint-config-next
```

## Uso

### Node
`eslint.config.js`
```js
import node from '@mw/eslint-config/node';
export default [...node];
```

### React (Vite/SPA)
`eslint.config.js`
```js
import react from '@mw/eslint-config/react';
export default [...react];
```

### Next.js
`eslint.config.js`
```js
import next from '@mw/eslint-config/next';
export default [...next];
```

> Dica (monorepo): em cada pacote/app importe apenas o preset necessário. Se quiser combinar (ex.: libs Node + app web), pode compor:
```js
import node from '@mw/eslint-config/node';
import react from '@mw/eslint-config/react';
export default [...node, ...react];
```

## Notas
- Este pacote usa **Type-Aware Rules**. O parser está configurado com `projectService: true`, então o ESLint usará o **tsconfig** do projeto automaticamente.
- Para Next, assumimos `eslint-config-next` com suporte ao Flat Config; o preset lida com variações e faz fallback se necessário.
- Requer Node 18.18+.
