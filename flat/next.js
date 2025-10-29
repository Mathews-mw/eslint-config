import reactPreset from './react.js';
// OBS: eslint-config-next >= 14/15 já expõe flat configs.
// Abaixo usamos o set "core-web-vitals" na variante flat.
import next from 'eslint-config-next';

export default [
  ...reactPreset,
  // aplica regras do Next (acessibilidade, performance, etc.)
  ...next['flat/core-web-vitals']
];
