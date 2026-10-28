import { StatusPill } from '@vevit/design-system';

export const Stavy = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
    <StatusPill color="var(--vv-c-tools)">V betě</StatusPill>
    <StatusPill color="var(--vv-c-games)">Online</StatusPill>
    <StatusPill color="var(--vv-c-services)">Připravujeme</StatusPill>
    <StatusPill color="var(--vv-c-account)">Spuštěno</StatusPill>
    <StatusPill color="var(--vv-c-store)">V plánu</StatusPill>
  </div>
);

export const STeckou = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
    <StatusPill dot>Spuštěno</StatusPill>
    <StatusPill dot color="var(--vv-warning)">Omezeně dostupné</StatusPill>
    <StatusPill dot color="var(--vv-danger)">Výpadek</StatusPill>
  </div>
);
