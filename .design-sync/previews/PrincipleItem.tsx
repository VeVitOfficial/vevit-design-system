import { PrincipleItem } from '@vevit/design-system';

export const Zasady = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 40, width: '100%' }}>
    <PrincipleItem number="01" title="Bez reklam">Nepoužíváme personalizované reklamy ani sledovací pixely. Projekt financujeme přes Premium a Store.</PrincipleItem>
    <PrincipleItem number="02" title="Nástroje na jednom místě">Najdeš tu PDF nástroje, kalkulačky, konvertory a AI pomocníky pro vývojáře.</PrincipleItem>
    <PrincipleItem number="03" title="Postup, který je vidět">Za používání aplikací můžeš získávat XP, levely a profilové odměny.</PrincipleItem>
    <PrincipleItem number="04" title="Čeština od začátku">Rozhraní i podpora vznikají nejdřív v češtině, další jazyky přibývají postupně.</PrincipleItem>
  </div>
);
