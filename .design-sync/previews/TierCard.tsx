import { TierCard } from '@vevit/design-system';

const grid = { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20, paddingTop: 14, width: '100%' } as const;

export const Plany = () => (
  <div style={grid}>
    <TierCard name="Bronze" color="#ea8736" avatarLetter="B" frameLabel="Bronze rámeček profilu" price="99 Kč" period="/ měsíc" alt="nebo 990 Kč / rok" cta="Vybrat Bronze" perks={['Bez reklam', 'Vybrané Premium kurzy v Edu', '50 AI dotazů denně', '5 % sleva ve VeVit Store']} />
    <TierCard name="Silver" color="#378add" avatarLetter="S" frameLabel="Silver rámeček profilu" price="199 Kč" period="/ měsíc" alt="nebo 1 990 Kč / rok" cta="Vybrat Silver" perks={['Všechny Premium kurzy v Edu', 'Lekce offline a certifikáty', '200 AI dotazů denně', '10 % sleva ve VeVit Store']} />
  </div>
);

export const ZvyraznenyAFiremni = () => (
  <div style={grid}>
    <TierCard featured pin="Nejvíc výhod" name="Gold" color="#e0a915" avatarLetter="G" frameLabel="Gold rámeček profilu" price="399 Kč" period="/ měsíc" alt="nebo 3 990 Kč / rok" cta="Vybrat Gold" perks={['Vše ze Silver', 'AI bez denního limitu', 'Prioritní podpora', '20 % sleva ve VeVit Store']} />
    <TierCard name="Platinum" color="#7f77dd" avatarLetter="P" frameLabel="Platinum rámeček profilu" price="Na domluvu" period="cena podle počtu licencí" cta="Napsat poptávku" perks={['Vše z Gold pro celou organizaci', 'Třídy, učitelé a přehled pokroku', 'Vlastní kurzy a obsah na míru']} />
  </div>
);
