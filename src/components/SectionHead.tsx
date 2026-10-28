import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import type { IconName } from "./Icon";

export interface SectionHeadProps {
  /** Štítek nad nadpisem. */
  eyebrow?: string;
  eyebrowIcon?: IconName;
  /** Nadpis sekce (h2). */
  title: ReactNode;
  /** Podnadpis, max. dvě věty. */
  text?: ReactNode;
  /** Zarovnání. @default "left" */
  align?: "left" | "center";
  className?: string;
}

/** Hlavička sekce: štítek, nadpis a krátký text. Výchozí je zarovnání doleva. */
export function SectionHead({ eyebrow, eyebrowIcon, title, text, align = "left", className }: SectionHeadProps) {
  return (
    <header className={["vv-section-head", align === "center" && "vv-section-head--center", className].filter(Boolean).join(" ")}>
      {eyebrow ? <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow> : null}
      <h2 className="vv-section-head__title">{title}</h2>
      {text ? <p className="vv-section-head__text">{text}</p> : null}
    </header>
  );
}
