import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./Icon";
import { StatusPill } from "./StatusPill";

export interface EcoTileProps {
  /** Název aplikace. */
  name: string;
  /** Krátký popis (1–3 řádky). */
  text?: ReactNode;
  /** Ikona aplikace, např. `<Icon name="wrench" size={24} />`. */
  icon: ReactNode;
  /** Barva aplikace, např. `var(--vv-c-tools)`. Určuje horní linku, ikonu a stav. */
  color: string;
  /** Stav, např. "V betě". */
  status?: string;
  /** Adresa zobrazená v patičce, např. "vevit.cz/tools". */
  url: string;
  /** Odkaz na aplikaci. Bez něj je dlaždice neaktivní (zamčená). */
  href?: string;
  className?: string;
}

/** Dlaždice aplikace ekosystému: barevná horní linka, ikona, stav, popis a adresa. Používejte v mřížce 3 sloupců. */
export function EcoTile({ name, text, icon, color, status, url, href, className }: EcoTileProps) {
  const cls = ["vv-eco-tile", !href && "vv-eco-tile--off", className].filter(Boolean).join(" ");
  const style = { "--c": color } as CSSProperties;
  const body = (
    <>
      <span className="vv-eco-tile__top">
        <span className="vv-eco-tile__icon">{icon}</span>
        {status ? <StatusPill color={color}>{status}</StatusPill> : null}
      </span>
      <h3 className="vv-eco-tile__name">{name}</h3>
      {text ? <p className="vv-eco-tile__text">{text}</p> : null}
      <span className="vv-eco-tile__foot">
        <span>{url}</span>
        <Icon name={href ? "arrow-up-right" : "lock"} size={href ? 18 : 16} />
      </span>
    </>
  );
  return href ? (
    <a className={cls} style={style} href={href}>{body}</a>
  ) : (
    <div className={cls} style={style}>{body}</div>
  );
}
