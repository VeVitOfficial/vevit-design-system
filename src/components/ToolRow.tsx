import type { ReactNode } from "react";

export interface ToolRowProps {
  name: string;
  /** Kategorie malým mono písmem, např. "PDF". */
  category?: string;
  description?: string;
  /** Ikona nástroje. */
  icon: ReactNode;
  /** Odznak vpravo nahoře, např. "Doporučeno". */
  badge?: string;
  /** Text akce. @default "Použít" */
  actionLabel?: string;
  href: string;
  className?: string;
}

/** Řádek nástroje v seznamu (dva sloupce na desktopu): ikona, název, kategorie, popis a akce. */
export function ToolRow({ name, category, description, icon, badge, actionLabel = "Použít", href, className }: ToolRowProps) {
  return (
    <a className={["vv-tool-row", className].filter(Boolean).join(" ")} href={href}>
      <span className="vv-tool-row__icon">{icon}</span>
      <span className="vv-tool-row__name">{name}</span>
      {badge ? <span className="vv-tool-row__badge">{badge}</span> : null}
      {category ? <span className="vv-tool-row__category">{category}</span> : null}
      {description ? <span className="vv-tool-row__desc">{description}</span> : null}
      <span className="vv-tool-row__use">{actionLabel}</span>
    </a>
  );
}
