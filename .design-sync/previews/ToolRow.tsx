import { ToolRow, Icon } from '@vevit/design-system';

export const Seznam = () => (
  <div style={{ width: '100%' }}>
    <ToolRow href="#" name="Odstranit pozadí" category="Obrázky" badge="Doporučeno" description="Odstraní pozadí z fotografie pomocí AI." icon={<Icon name="sparkles" size={20} />} />
    <ToolRow href="#" name="Komprese PDF" category="PDF" description="Zmenší velikost PDF souboru." icon={<Icon name="layers" size={20} />} />
    <ToolRow href="#" name="Generátor hesel" category="Bezpečnost" description="Vytvoří bezpečné heslo podle zvolených pravidel." icon={<Icon name="lock" size={20} />} />
    <ToolRow href="#" name="JSON formátovač" category="Dev" description="Formátuje a zkontroluje JSON strukturu." icon={<Icon name="code" size={20} />} actionLabel="Otevřít" />
  </div>
);
