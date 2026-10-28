import { Eyebrow } from '@vevit/design-system';

export const Zakladni = () => <Eyebrow>Český digitální ekosystém</Eyebrow>;

export const SIkonou = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <Eyebrow icon="sparkles">Český digitální ekosystém</Eyebrow>
    <Eyebrow icon="layers">Ekosystém</Eyebrow>
    <Eyebrow>Prémiové členství</Eyebrow>
  </div>
);
