export interface StatInlineProps {
  /** Hodnota, např. "100+". */
  value: string;
  /** Popisek za hodnotou, např. "nástrojů". */
  label: string;
  /** Hodnota v akcentní barvě. @default false */
  accent?: boolean;
  className?: string;
}

/** Číslo s popiskem na jednom řádku (statistiky v hero). */
export function StatInline({ value, label, accent = false, className }: StatInlineProps) {
  return (
    <span className={["vv-stat", accent && "vv-stat--accent", className].filter(Boolean).join(" ")}>
      <span className="vv-stat__value">{value}</span>
      {label}
    </span>
  );
}
