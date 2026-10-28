import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export interface EyebrowProps {
  /** Volitelná malá ikona před textem. */
  icon?: IconName;
  children: ReactNode;
  className?: string;
}

/** Krátký štítek sekce: mono, verzálky, akcentní barva. Používejte střídmě, jeden na sekci. */
export function Eyebrow({ icon, children, className }: EyebrowProps) {
  return (
    <span className={["vv-eyebrow", className].filter(Boolean).join(" ")}>
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
    </span>
  );
}
