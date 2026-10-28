import { RoadmapRow } from '@vevit/design-system';

export const Roadmapa = () => (
  <div style={{ width: '100%', borderTop: '2px solid var(--vv-text)' }}>
    <RoadmapRow status="Spuštěno" name="Account" progress={100} progressLabel="100 % hotovo" meta="vevit.cz/account">Registrace a přihlášení jsou v betě. Na XP profil, achievementy, levely a propojení aplikací dál pracujeme.</RoadmapRow>
    <RoadmapRow status="V betě" name="Tools" progress={85} progressLabel="85 % hotovo" meta="vevit.cz/tools">Kalkulačky, konvertory, generátory, PDF nástroje a dev utility. Běží lokálně v prohlížeči.</RoadmapRow>
    <RoadmapRow status="V betě" name="Edu" progress={30} progressLabel="30 % hotovo" meta="vevit.cz/edu">Lekce, kvízy a články o programování, matematice a jazycích. Otevřená beta.</RoadmapRow>
    <RoadmapRow status="V plánu" name="VeVit Store" progress={30} progressLabel="30 % hotovo">Merch, digitální produkty, e-knihy a kurzy. Premium uživatelé mají 20 % slevu.</RoadmapRow>
  </div>
);
