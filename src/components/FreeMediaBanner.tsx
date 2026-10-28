export interface FreeMediaBannerProps {
  /** Hlavní věta (velký text přes vlajku). */
  title: string;
  /** Menší vtip pod ní, v tmavém štítku. */
  joke?: string;
  /** Fotografie vpravo (plynule se prolíná s trikolorou). */
  photoSrc?: string;
  /** Menší varianta fotografie pro telefony (≤ 720 px). */
  photoSmSrc?: string;
  /** Autor fotografie. */
  creditName?: string;
  /** Odkaz na zdroj/licenci fotografie. */
  creditHref?: string;
  /** Licence, např. "CC BY-SA 4.0". */
  creditLicense?: string;
  className?: string;
}

/** Pruh pod hlavičkou: česká vlajka, která se přelévá do trikolory a ta do fotografie. Text je přes plochu, vtip v tmavém štítku. Stejný ve světlém i tmavém režimu. */
export function FreeMediaBanner({ title, joke, photoSrc, photoSmSrc, creditName, creditHref, creditLicense, className }: FreeMediaBannerProps) {
  return (
    <aside className={["vv-banner", className].filter(Boolean).join(" ")} aria-label={title}>
      <div className="vv-banner__bg" aria-hidden="true">
        {photoSrc ? (
          <div className="vv-banner__photo">
            <picture>
              {photoSmSrc ? <source media="(max-width: 720px)" srcSet={photoSmSrc} /> : null}
              <img src={photoSrc} alt="" decoding="async" />
            </picture>
          </div>
        ) : null}
        <div className="vv-banner__flow">
          <svg viewBox="0 0 1200 240" preserveAspectRatio="none" focusable="false">
            <defs>
              <linearGradient id="vv-banner-sheen" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset=".5" stopColor="#fff" stopOpacity=".16" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="330" height="120" fill="#fff" />
            <rect x="0" y="120" width="330" height="120" fill="#d7141a" />
            <polygon points="0,0 190,120 0,240" fill="#11457e" />
            <path fill="#fff" d="M320 0 C450 0 520 46 660 34 S940 -6 1210 26 L1210 98 C940 120 800 70 660 92 S450 122 320 122 Z" />
            <path fill="#d7141a" d="M320 118 C450 118 530 152 670 138 S940 100 1210 132 L1210 178 C940 196 800 150 670 172 S450 190 320 186 Z" />
            <path fill="#11457e" d="M150 150 C250 190 400 150 500 196 S820 222 1210 176 L1210 240 L60 240 C80 208 110 172 150 150 Z" />
            <rect x="0" y="0" width="1200" height="240" fill="url(#vv-banner-sheen)" />
          </svg>
        </div>
        <div className="vv-banner__shade" />
      </div>
      <div className="vv-banner__inner">
        <p className="vv-banner__title">{title}</p>
        {joke ? <p className="vv-banner__joke">{joke}</p> : null}
      </div>
      {creditName ? (
        <p className="vv-banner__credit">
          Foto: {creditName}
          {creditHref ? <>, <a href={creditHref} target="_blank" rel="noopener noreferrer">{creditLicense ?? "licence"}</a></> : null}
        </p>
      ) : null}
    </aside>
  );
}
