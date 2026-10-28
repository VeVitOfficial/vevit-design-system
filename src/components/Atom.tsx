import { useRef, useCallback } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export interface AtomElectron {
  /** Ikona na čipu. */
  icon: IconName;
  /** Barva čipu a stopy, např. `var(--vv-c-tools)`. */
  color: string;
  /** Na které ze tří orbit leží (0, 1, 2). */
  orbit: 0 | 1 | 2;
  /** Fáze oběhu 0–1 (rozestavení na orbitě). @default 0 */
  phase?: number;
}

export interface AtomProps {
  /** Elektrony (aplikace). Výchozí: šest aplikací ekosystému. */
  electrons?: AtomElectron[];
  /** Obsah jádra (logo, text). Výchozí: monogram "V". */
  children?: ReactNode;
  /** Otáčení tažením s podrženým levým tlačítkem myši. @default true */
  draggable?: boolean;
  className?: string;
}

/** Výchozí rozložení šesti aplikací VeVit na třech orbitách. */
export const defaultAtomElectrons: AtomElectron[] = [
  { icon: "wrench", color: "var(--vv-c-tools)", orbit: 0, phase: 0 },
  { icon: "gamepad", color: "var(--vv-c-games)", orbit: 0, phase: 0.5 },
  { icon: "graduation", color: "var(--vv-c-edu)", orbit: 1, phase: 0.15 },
  { icon: "layers", color: "var(--vv-c-services)", orbit: 1, phase: 0.65 },
  { icon: "user", color: "var(--vv-c-account)", orbit: 2, phase: 0.3 },
  { icon: "search", color: "var(--vv-c-search)", orbit: 2, phase: 0.8 },
];

const ORBITS = ["a", "b", "c"] as const;
const DURATION = ["30s", "38s", "46s"];

/** Značkový 3D objekt: jádro, tři nakloněné orbity s elektrony (aplikace) a krychle. Čipy míří vždy na diváka. Potřebuje čtvercový prostor (aspect-ratio 1). */
export function Atom({ electrons = defaultAtomElectrons, children, draggable = true, className }: AtomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ on: false, x: 0, y: 0, yaw: 0, pitch: 0, sy: 0, sp: 0 });

  const apply = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", `${drag.current.yaw.toFixed(2)}deg`);
    el.style.setProperty("--ty", `${drag.current.pitch.toFixed(2)}deg`);
  }, []);

  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggable || e.pointerType !== "mouse" || e.button !== 0) return;
    const d = drag.current;
    d.on = true; d.x = e.clientX; d.y = e.clientY; d.sy = d.yaw; d.sp = d.pitch;
    ref.current?.classList.add("is-dragging");
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.on || !(e.buttons & 1)) return;
    d.yaw = d.sy + (e.clientX - d.x) * 0.45;
    d.pitch = Math.max(-75, Math.min(75, d.sp - (e.clientY - d.y) * 0.35));
    apply();
  };
  const onUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    drag.current.on = false;
    ref.current?.classList.remove("is-dragging");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div ref={ref} className={["vv-atom", className].filter(Boolean).join(" ")} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} style={draggable ? undefined : { cursor: "default" }}>
      <div className="vv-atom-scene" aria-hidden="true">
        <div className="vv-atom-halo" />
        {ORBITS.map((o, i) => (
          <div key={o} className={`vv-atom-ring vv-ring-${o}`}>
            {electrons.filter((el) => el.orbit === i).map((el, k) => (
              <div key={k} className="vv-atom-track" style={{ "--d": DURATION[i], "--ph": String(el.phase ?? 0) } as CSSProperties}>
                <div className="vv-atom-electron">
                  <div className="vv-atom-bb">
                    <span className="vv-atom-chip" style={{ "--n": el.color } as CSSProperties}>
                      <Icon name={el.icon} size={22} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="vv-atom-ring vv-ring-core">
          {[["var(--vv-c-tools)", "0"], ["var(--vv-c-edu)", "0.33"], ["var(--vv-c-games)", "0.66"]].map(([c, p]) => (
            <div key={p} className="vv-atom-track" style={{ "--d": "9s", "--ph": p } as CSSProperties}>
              <span className="vv-atom-proton" style={{ "--n": c } as CSSProperties} />
            </div>
          ))}
        </div>
        <div className="vv-atom-core">
          <span className="vv-atom-core-sphere" />
          <span className="vv-atom-core-logo">{children ?? "V"}</span>
        </div>
        {(["tools", "edu", "games"] as const).map((c, i) => (
          <div key={c} className={`vv-atom-cube vv-cube-${i + 1}`} style={{ "--n": `var(--vv-c-${c})` } as CSSProperties}><i /><i /><i /><i /><i /><i /></div>
        ))}
      </div>
    </div>
  );
}
