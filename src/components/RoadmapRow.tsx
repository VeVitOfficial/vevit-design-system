import type { ReactNode } from "react";

export interface RoadmapRowProps {
  /** Stav, např. "V betě". */
  status: string;
  name: string;
  children?: ReactNode;
  /** Postup 0–100. */
  progress: number;
  /** Text vpravo pod ukazatelem, např. "85 % hotovo". */
  progressLabel?: string;
  /** Adresa vpravo pod ukazatelem. */
  meta?: string;
  className?: string;
}

/** Řádek roadmapy: stav, název, popis a ukazatel postupu. Na mobilu se skládá pod sebe. */
export function RoadmapRow({ status, name, children, progress, progressLabel, meta, className }: RoadmapRowProps) {
  const value = Math.max(0, Math.min(100, progress));
  return (
    <article className={["vv-roadmap-row", className].filter(Boolean).join(" ")}>
      <div className="vv-roadmap-row__status">{status}</div>
      <h3 className="vv-roadmap-row__name">{name}</h3>
      <p className="vv-roadmap-row__text">{children}</p>
      <div className="vv-roadmap-row__bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`${name}: ${value} %`}>
        <span style={{ width: `${value}%` }} />
      </div>
      <div className="vv-roadmap-row__meta">
        <span>{progressLabel}</span>
        <span>{meta}</span>
      </div>
    </article>
  );
}
