import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps {
  /** Vzhled: plné akcentní (hlavní akce) nebo obrysové. @default "primary" */
  variant?: "primary" | "ghost";
  /** Velikost. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Když je zadáno, vykreslí se odkaz `<a>` místo `<button>`. */
  href?: string;
  /** Ikona před textem (např. `<Icon name="arrow-right" />`). */
  iconBefore?: ReactNode;
  /** Ikona za textem. */
  iconAfter?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type Rest = Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps>;

/** Tlačítko vevit.cz. Jedno primární tlačítko na pohled, ostatní akce jako `ghost`. */
export function Button({ variant = "primary", size = "md", href, iconBefore, iconAfter, disabled, children, className, onClick, type = "button", ...rest }: ButtonProps & Rest) {
  const cls = ["vv-btn", `vv-btn--${variant}`, size !== "md" && `vv-btn--${size}`, className].filter(Boolean).join(" ");
  const content = (<>{iconBefore}{children}{iconAfter}</>);
  if (href) {
    return <a className={cls} href={disabled ? undefined : href} aria-disabled={disabled || undefined} onClick={onClick} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>;
  }
  return <button className={cls} type={type} disabled={disabled} onClick={onClick} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>;
}
