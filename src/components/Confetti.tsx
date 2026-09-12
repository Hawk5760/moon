import { useMemo } from "react";

const COLORS = ["var(--gold)", "var(--moon)", "var(--periwinkle)", "var(--paper)"];

/** Lightweight DOM confetti + stars burst. Remount (via key) to replay. */
export function Confetti({ pieces = 90 }: { pieces?: number }) {
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.9}s`,
        duration: `${2.4 + Math.random() * 2}s`,
        dx: `${(Math.random() - 0.5) * 260}px`,
        color: COLORS[i % COLORS.length],
        star: Math.random() > 0.7,
        size: 6 + Math.random() * 8,
      })),
    [pieces],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {bits.map((b, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: b.left,
            width: b.size,
            height: b.star ? b.size : b.size * 0.45,
            background: b.star ? "transparent" : b.color,
            color: b.color,
            borderRadius: b.star ? 0 : 1,
            animation: `confetti-fall ${b.duration} linear ${b.delay} forwards`,
            ["--dx" as string]: b.dx,
            fontSize: b.size,
            lineHeight: 1,
          }}
        >
          {b.star ? "✦" : ""}
        </span>
      ))}
    </div>
  );
}
