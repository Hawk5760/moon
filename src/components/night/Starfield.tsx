import { useMemo } from "react";
import nightSky from "@/assets/night-sky.jpg";

type Star = { top: string; left: string; size: number; delay: string; gold: boolean };

function makeStars(count: number, seed: number): Star[] {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    top: `${rnd() * 100}%`,
    left: `${rnd() * 100}%`,
    size: 1 + rnd() * 2.4,
    delay: `${rnd() * 5}s`,
    gold: rnd() > 0.72,
  }));
}

/** Fixed, full-page night sky: photo texture + twinkling stars. */
export function Starfield() {
  const stars = useMemo(() => makeStars(120, 7), []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night-deep">
      <div
        className="absolute -inset-[6%] animate-drift bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${nightSky})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent,var(--night-deep))] opacity-90" />
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute animate-twinkle rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            background: star.gold ? "var(--gold)" : "var(--moon)",
            boxShadow: `0 0 ${star.size * 4}px ${star.gold ? "var(--gold)" : "var(--moon)"}`,
          }}
        />
      ))}
    </div>
  );
}

/** The glowing moon. Size in px. */
export function Moon({
  size = 160,
  className = "",
  phase = "full",
}: {
  size?: number;
  className?: string;
  phase?: "full" | "crescent";
}) {
  return (
    <div
      className={`relative shrink-0 rounded-full moon-glow ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 34% 30%, oklch(0.99 0.02 95), oklch(0.9 0.04 92) 55%, oklch(0.78 0.05 90))",
      }}
      aria-hidden
    >
      <span
        className="absolute inset-0 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle at 62% 66%, oklch(0.72 0.03 265 / 0.6), transparent 42%), radial-gradient(circle at 30% 62%, oklch(0.75 0.02 265 / 0.5), transparent 30%), radial-gradient(circle at 66% 28%, oklch(0.76 0.02 265 / 0.45), transparent 26%)",
        }}
      />
      {phase === "crescent" && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "var(--night-deep)",
            transform: "translateX(24%)",
            filter: "blur(1px)",
          }}
        />
      )}
    </div>
  );
}
