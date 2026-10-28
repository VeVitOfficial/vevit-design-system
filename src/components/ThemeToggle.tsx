import { Icon } from "./Icon";

export interface ThemeToggleProps {
  /** Aktuálně platný režim. Ikona ukazuje režim, na který se přepne. */
  theme: "light" | "dark";
  /** Zavolá se po kliknutí; nastavte `data-theme` na `<html>` a uložte volbu. */
  onToggle?: () => void;
  className?: string;
}

/** Tlačítko pro přepnutí světlého a tmavého režimu (slunce = přepnout na světlý, měsíc = na tmavý). */
export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const label = theme === "light" ? "Přepnout na tmavý režim" : "Přepnout na světlý režim";
  return (
    <button type="button" className={["vv-theme-toggle", className].filter(Boolean).join(" ")} aria-label={label} title={label} onClick={onToggle}>
      <Icon name={theme === "light" ? "moon" : "sun"} size={18} />
    </button>
  );
}
