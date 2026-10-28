import { AppBrand } from '@vevit/design-system';

export const Aplikace = () => (
  <div style={{ display: 'grid', gap: 18 }}>
    <AppBrand suffix="Technologies" />
    <AppBrand suffix="Tools" />
    <AppBrand suffix="Edu" />
    <AppBrand suffix="Store" />
  </div>
);

export const Samotne = () => <AppBrand />;
