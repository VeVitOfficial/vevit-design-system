import { StatInline } from '@vevit/design-system';

export const Hero = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
    <StatInline accent value="100+" label="nástrojů" />
    <StatInline value="28" label="her" />
    <StatInline value="300+" label="lekcí" />
  </div>
);

export const Jedna = () => <StatInline value="0 Kč" label="cena" />;
