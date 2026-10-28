import type { ReactNode } from "react";

export interface PrincipleItemProps {
  /** Pořadové číslo, např. "01". */
  number: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

/** Položka číslovaného seznamu zásad (dvousloupcová mřížka, linka nahoře). */
export function PrincipleItem({ number, title, children, className }: PrincipleItemProps) {
  return (
    <article className={["vv-principle", className].filter(Boolean).join(" ")}>
      <span className="vv-principle__num">{number}</span>
      <h3 className="vv-principle__title">{title}</h3>
      {children ? <p className="vv-principle__text">{children}</p> : null}
    </article>
  );
}
