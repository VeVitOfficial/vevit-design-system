// Sestavení balíčku: ESM bundle (esbuild), typy (tsc), jeden stylesheet (tokeny + fonty + komponenty).
import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
await build({ entryPoints: ['src/index.ts'], bundle: true, format: 'esm', outfile: 'dist/index.es.js',
  external: ['react', 'react-dom', 'react/jsx-runtime'], jsx: 'automatic', target: 'es2020', sourcemap: false });
execSync('npx tsc -p tsconfig.json', { stdio: 'inherit' });
const css = ['fonts.css', 'tokens.css', 'components.css'].map(f => readFileSync('src/styles/' + f, 'utf8')).join('\n');
writeFileSync('dist/style.css', css);
console.log('dist hotovo');
