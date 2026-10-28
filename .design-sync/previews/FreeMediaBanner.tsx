import { FreeMediaBanner } from '@vevit/design-system';

export const Banner = () => (
  <div style={{ width: '100%' }}>
    <FreeMediaBanner
      title="VeVit Technologies a celý VeVit Team stojí za svobodnými veřejnoprávními médii."
      joke="Ve 4:36 u nás nasazujeme nové verze aplikací. Lidi ani klienty nevyhazujeme."
    />
  </div>
);

export const SeFotografii = () => (
  <div style={{ width: '100%' }}>
    <FreeMediaBanner
      title="Svobodná veřejnoprávní média patří nám všem."
      joke="Nasazujeme v noci, abychom se ve dne mohli věnovat lidem."
      photoSrc="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 683'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23c9b8a3'/%3E%3Cstop offset='1' stop-color='%23333a55'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1600' height='683' fill='url(%23g)'/%3E%3C/svg%3E"
      creditName="Ukázkový autor"
      creditHref="#"
      creditLicense="CC BY-SA 4.0"
    />
  </div>
);
