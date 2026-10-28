export interface AppBrandProps {
  /** Hlavní slovo značky. @default "VeVit" */
  name?: string;
  /** Přípona aplikace, např. "Technologies", "Edu", "Store". */
  suffix?: string;
  href?: string;
  className?: string;
}

/** Wordmark VeVit s volitelnou příponou aplikace. */
export function AppBrand({ name = "VeVit", suffix, href = "/", className }: AppBrandProps) {
  return (
    <a className={["vv-app-brand", className].filter(Boolean).join(" ")} href={href} aria-label={suffix ? `${name} ${suffix}` : name}>
      <span className="vv-app-brand__name">{name}</span>
      {suffix ? <span className="vv-app-brand__suffix">{suffix}</span> : null}
    </a>
  );
}
