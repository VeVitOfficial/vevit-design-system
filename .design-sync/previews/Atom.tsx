import { Atom } from '@vevit/design-system';

export const Ekosystem = () => (
  <div style={{ width: 440 }}>
    <Atom />
  </div>
);

export const SVlastnimJadrem = () => (
  <div style={{ width: 360 }}>
    <Atom electrons={[{ icon: 'wrench', color: 'var(--vv-c-tools)', orbit: 0 }, { icon: 'search', color: 'var(--vv-c-search)', orbit: 1, phase: 0.5 }, { icon: 'bag', color: 'var(--vv-c-store)', orbit: 2, phase: 0.25 }]}>
      <strong style={{ color: 'var(--vv-green)', fontSize: 34, letterSpacing: '-0.03em' }}>vevit</strong>
    </Atom>
  </div>
);
