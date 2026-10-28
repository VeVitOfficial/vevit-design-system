# VeVit design system: jak s ním stavět

**Spuštění a režimy.** Načtěte `styles.css` (tokeny, písma Plex, styly komponent) a dejte komponenty přímo do stránky; žádný provider ani wrapper není potřeba, tokeny jsou na `:root`. Tmavý režim je výchozí, světlý se zapne podle systému (`prefers-color-scheme`) nebo atributem `data-theme="light"` / `"dark"` na `<html>`. Ručně přepínejte `data-theme` a ukládejte volbu; `ThemeToggle` je jen tlačítko (`theme` + `onToggle`), samo nic nepřepíná.

**Jak se stylizuje: tokeny, ne utility třídy.** Systém nemá utility třídy. Vlastní rozvržení (grid, odsazení) pište inline nebo vlastním CSS a barvy, písmo a rohy berte výhradně z proměnných. Nikdy nepište hex barvy mimo karty plánů.
- Povrchy a text: `--vv-bg`, `--vv-surface`, `--vv-surface-elev`, `--vv-text`, `--vv-text-2`, `--vv-text-muted`; linky `--vv-border`, `--vv-border-hover`, `--vv-border-strong`.
- Akcent: `--vv-accent` (zelená; ve světlém režimu tmavší), `--vv-accent-ink` (text na akcentu), `--vv-accent-soft`, `--vv-accent-border`.
- Barvy aplikací (kategorie, stejné v obou režimech): `--vv-c-tools`, `--vv-c-games`, `--vv-c-edu`, `--vv-c-services`, `--vv-c-account`, `--vv-c-search`, `--vv-c-store`; předávejte je jako `color` do `EcoTile`, `StatusPill`, `TierCard`.
- Písmo `var(--vv-font-sans)` (IBM Plex Sans) a `var(--vv-font-mono)` (IBM Plex Mono: štítky, adresy, čísla). Rohy `--vv-radius-sm/md/lg`. Neprůhledné překryvy: `rgba(var(--vv-fg-rgb), 0.06)`.

**Pravidla vzhledu.** Jedno primární `Button` na pohled, další akce `variant="ghost"`. Sekce mají levostranné zarovnání (`SectionHead`, `align="center"` jen výjimečně). Stavy a kategorie jsou `StatusPill`, ne vlastní odznaky. Žádné gradienty ani záře jako dekorace; efekt musí nést informaci. Text nikdy pod 12 px, kontrast ≥ 4,5:1.

**Kde je pravda.** Před stylováním si přečtěte `styles.css` a z něj importované `_ds_bundle.css` (tokeny a třídy `.vv-*`) a u každé komponenty její `<Name>.d.ts` a `<Name>.prompt.md`.

**Minimální stavba.**
```jsx
const { AppBrand, ThemeToggle, SectionHead, EcoTile, Icon, Button } = window.VeVit;

<header style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 32px' }}>
  <AppBrand suffix="Technologies" />
  <ThemeToggle theme="dark" onToggle={() => {}} />
</header>
<section style={{ padding: '64px 32px' }}>
  <SectionHead eyebrow="Ekosystém" title="Webové aplikace" text="Každá aplikace má vlastní zaměření." />
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, marginTop: 32 }}>
    <EcoTile name="Tools" color="var(--vv-c-tools)" status="V betě" url="vevit.cz/tools" href="#"
             icon={<Icon name="wrench" size={24} />} text="Kalkulačky, konvertory a PDF nástroje." />
  </div>
  <Button iconAfter={<Icon name="arrow-right" size={16} />}>Otevřít Tools</Button>
</section>
```
Ikony jsou jen z `Icon` (`iconNames`); ikonu předávejte jako element (`icon={<Icon …/>}`). Obsah píšeme česky.
