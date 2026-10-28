import type { CSSProperties } from "react";

export interface TierCardProps {
  /** Název plánu, např. "Gold". */
  name: string;
  /** Cena včetně měny, např. "399 Kč" nebo "Na domluvu". */
  price: string;
  /** Období, např. "/ měsíc". */
  period?: string;
  /** Alternativa pod cenou, např. "nebo 3 990 Kč / rok". */
  alt?: string;
  /** Výhody plánu. */
  perks: string[];
  /** Text tlačítka. */
  cta: string;
  href?: string;
  /** Barva plánu (rámeček profilu, odrážky, tlačítko). */
  color: string;
  /** Jednopísmenný náhled avataru s rámečkem plánu. */
  avatarLetter?: string;
  /** Popis rámečku nad názvem, např. "Gold rámeček profilu". */
  frameLabel?: string;
  /** Zvýrazněný plán s plochou barvou a štítkem. @default false */
  featured?: boolean;
  /** Štítek nad kartou u zvýrazněného plánu, např. "Nejvíc výhod". */
  pin?: string;
  className?: string;
}

/** Karta prémiového plánu. Čtyři vedle sebe; zvýrazněný je nejvýš jeden. */
export function TierCard({ name, price, period, alt, perks, cta, href = "#", color, avatarLetter, frameLabel, featured = false, pin, className }: TierCardProps) {
  return (
    <article className={["vv-tier", featured && "vv-tier--featured", className].filter(Boolean).join(" ")} style={{ "--c": color } as CSSProperties}>
      {pin ? <span className="vv-tier__pin">{pin}</span> : null}
      {avatarLetter ? <div className="vv-tier__avatar"><span>{avatarLetter}</span></div> : null}
      {frameLabel ? <div className="vv-tier__frame">{frameLabel}</div> : null}
      <div className="vv-tier__name">{name}</div>
      <div className="vv-tier__price">{price}</div>
      {period ? <div className="vv-tier__period">{period}</div> : null}
      <div className="vv-tier__alt">{alt}</div>
      <ul className="vv-tier__perks">{perks.map((p) => <li key={p}>{p}</li>)}</ul>
      <a className="vv-tier__cta" href={href}>{cta}</a>
    </article>
  );
}
