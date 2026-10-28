import { Field, Button } from '@vevit/design-system';

export const Stavy = () => (
  <div style={{ display: 'grid', gap: 18, width: 360 }}>
    <Field label="Jméno a příjmení" required placeholder="Jan Novák" hint="Zobrazuje se u vašich komentářů." />
    <Field label="E-mail" required type="email" defaultValue="jan.novak@" error="Zadejte prosím platnou e-mailovou adresu." />
    <Field label="Heslo" required type="password" placeholder="Vytvořte silné heslo" hint="Minimálně 8 znaků, velké a malé písmeno a číslo." />
  </div>
);

export const Formular = () => (
  <form style={{ display: 'grid', gap: 18, width: 420 }} onSubmit={(e) => e.preventDefault()}>
    <Field label="E-mail" required type="email" placeholder="vas@email.cz" />
    <Field label="Zpráva" multiline required placeholder="S čím můžeme pomoci?" />
    <Button type="submit">Odeslat zprávu</Button>
  </form>
);
