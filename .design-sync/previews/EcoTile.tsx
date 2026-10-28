import { EcoTile, Icon } from '@vevit/design-system';

export const Aplikace = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, width: '100%' }}>
    <EcoTile name="Tools" color="var(--vv-c-tools)" status="V betě" url="vevit.cz/tools" href="#" icon={<Icon name="wrench" size={24} />} text="Kalkulačky, konvertory, generátory, PDF nástroje a AI pomocníci. Vše běží lokálně v prohlížeči." />
    <EcoTile name="Games" color="var(--vv-c-games)" status="Online" url="www.vevit.fun" href="#" icon={<Icon name="gamepad" size={24} />} text="28 her k vyzkoušení, včetně Snake, Tetrisu, Pac-Mana a 2048." />
    <EcoTile name="Edu" color="var(--vv-c-edu)" status="V betě" url="vevit.cz/edu" href="#" icon={<Icon name="graduation" size={24} />} text="300+ lekcí, kvízů a článků. Programování, matematika, jazyky." />
  </div>
);

export const Neaktivni = () => (
  <div style={{ width: 240 }}>
    <EcoTile name="Search" color="var(--vv-c-search)" status="Připravujeme" url="search.vevit.cz" icon={<Icon name="search" size={24} />} text="Univerzální vyhledávač přes celý VeVit ekosystém." />
  </div>
);
