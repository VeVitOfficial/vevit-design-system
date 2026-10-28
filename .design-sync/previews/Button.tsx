import { Button, Icon } from '@vevit/design-system';

export const Varianty = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
    <Button iconAfter={<Icon name="arrow-right" size={16} />}>Otevřít Tools</Button>
    <Button variant="ghost">Prozkoumat ekosystém</Button>
    <Button variant="ghost" iconBefore={<Icon name="graduation" size={16} />}>VeVit Edu pro školy</Button>
  </div>
);

export const Velikosti = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
    <Button size="sm">Malé</Button>
    <Button>Výchozí</Button>
    <Button size="lg">Velké</Button>
  </div>
);

export const Stavy = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
    <Button disabled>Odesílám…</Button>
    <Button variant="ghost" disabled>Zrušit</Button>
    <Button href="https://www.vevit.cz/tools">Odkaz místo tlačítka</Button>
  </div>
);
