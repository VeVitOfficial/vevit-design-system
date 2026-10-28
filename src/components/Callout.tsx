import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export interface CalloutProps {
  /** Štítek nad textem, např. "O projektu". */
  label?: string;
  children: ReactNode;
  className?: string;
}

/** Klidná poznámka s akcentní linkou vlevo (bez pozadí a rámečku). */
export function Callout({ label, children, className }: CalloutProps) {
  return (
    <aside className={["vv-callout", className].filter(Boolean).join(" ")}>
      {label ? <Eyebrow className="vv-callout__label">{label}</Eyebrow> : null}
      <p className="vv-callout__text">{children}</p>
    </aside>
  );
}
