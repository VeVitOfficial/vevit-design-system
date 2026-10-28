import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useId } from "react";

export interface FieldProps {
  label: string;
  /** Pomocný text pod polem. */
  hint?: string;
  /** Chybová zpráva; nastaví `aria-invalid` a červený text. */
  error?: string;
  required?: boolean;
  /** Víceřádkové pole. @default false */
  multiline?: boolean;
  placeholder?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  name?: string;
  defaultValue?: string;
  rows?: number;
  className?: string;
}

/** Pole formuláře s popiskem nad polem, nápovědou a chybou. Popisek vždy viditelný (placeholder ho nenahrazuje). */
export function Field({ label, hint, error, required, multiline, placeholder, type = "text", name, defaultValue, rows = 4, className }: FieldProps) {
  const id = useId();
  const describedBy = hint || error ? `${id}-d` : undefined;
  const common = { id, name, placeholder, required, defaultValue, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy, className: "vv-field__input" } as const;
  return (
    <div className={["vv-field", className].filter(Boolean).join(" ")}>
      <label className="vv-field__label" htmlFor={id}>
        {label}
        {required ? <span className="vv-field__required" aria-hidden="true">*</span> : null}
      </label>
      {multiline ? <textarea rows={rows} {...(common as TextareaHTMLAttributes<HTMLTextAreaElement>)} /> : <input type={type} {...(common as InputHTMLAttributes<HTMLInputElement>)} />}
      <p id={describedBy} className={["vv-field__hint", error && "vv-field__hint--error"].filter(Boolean).join(" ")}>{error ?? hint}</p>
    </div>
  );
}
