# NOTES: @vevit/design-system

- Balíček `/home/vitekeee/Projects/vevit-design-system` je **ručně vytvořený** z prezentačních částí vevit.cz (home: atom, ekosystém, nástroje, zásady, roadmapa, plány Premium, formulář, banner, přepínač režimu); vevit-web-app samotná není knihovna a nebyla měněna. Komponenty jsou přepsané do čistého Reactu + CSS (`src/`), nikoli kopie z Next.js aplikace.
- Sestavení: `npm run build` (esbuild ESM + tsc typy + spojení `src/styles/{fonts,tokens,components}.css` do `dist/style.css`). Konvertor: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./dist/index.es.js --out ./ds-bundle`; re-sync jedním příkazem přes `.ds-sync/resync.mjs` (viz skill).
- Playwright: `.ds-sync` má `playwright@1.63.0` (odpovídá cachovanému chromium-1243). Capture běží se světlým systémovým schématem, takže karty se renderují ve světlém režimu (tokeny platí v obou).
- Fonty: IBM Plex Sans/Mono woff2 zkopírované z vevit.space (`fonts/`); `@font-face` jsou v `src/styles/fonts.css`, relativní cesta `../fonts/` je vůči `dist/style.css`.
- Skupiny (`category`) jsou přes `docsMap` na stuby v `docs/_groups/*.md`.
- Karty s širokým obsahem mají `cfg.overrides.<Name>.cardMode = "column"` (Atom, EcoTile, Field, FreeMediaBanner, Icon, PrincipleItem, RoadmapRow, ThemeToggle, TierCard).
- Gray plocha pod buňkami ve sheetech je rozvržení capture rámce, ne chyba komponent.

## Known render warns
- Žádné (validate: 17/17 čisté, po `cardMode: column` bez GRID_OVERFLOW).

## Re-sync risks
- **Komponenty a CSS jsou kopie, ne odkazy** na vevit.cz: změny v aplikaci (`src/styles/home/*.css`, `home/page.tsx`) se do balíčku nepropíšou samy; při velké změně vzhledu aplikace je nutné balíček aktualizovat ručně.
- `FreeMediaBanner` a `Atom` mají hodnoty natvrdo (barvy vlajky, doby oběhu); ukázka banneru používá data-URI placeholder, ne reálnou fotografii (fotografie je CC BY-SA, není součástí balíčku).
- Zvýrazněný `TierCard` pin má natvrdo barvu `#5b52c4`.
- Ověřeno jen ve světlém režimu capture; tmavý režim byl ověřen na aplikaci (vevit.cz), ne screenshoty balíčku.
- Ještě **nenahráno** do Claude Design: čeká na `/design-login` (DesignSync nebyl autorizován) a vytvoření projektu „VeVit Design System“.
