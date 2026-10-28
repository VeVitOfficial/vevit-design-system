import type { ReactNode } from "react";

export interface StatusPillProps {
  /** Barva stavu, např. `var(--vv-c-tools)` nebo hex. @default akcent */
  color?: string;
  /** Zobrazí tečku před textem. @default false */
  dot?: boolean;
  children: ReactNode;
  className?: string;
}

/** Malý stavový štítek (V betě, Spuštěno, Připravujeme). Barva se mísí s barvou textu pro čitelnost v obou režimech. */
export function StatusPill({ color, dot = false, children, className }: StatusPillProps) {
  return (
    <span className={["vv-pill", dot && "vv-pill--dot", className].filter(Boolean).join(" ")} style={color ? ({ "--c": color } as React.CSSProperties) : undefined}>
      {children}
    </span>
  );
}
