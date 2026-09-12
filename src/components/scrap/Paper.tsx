import type { ReactNode, CSSProperties } from "react";

type Tilt = { tilt?: number };

export function Tape({
  className = "",
  variant = "plain",
}: {
  className?: string;
  variant?: "plain" | "grid" | "dots";
}) {
  const pattern =
    variant === "grid"
      ? "repeating-linear-gradient(0deg,oklch(1 0 0/.28) 0 1px,transparent 1px 6px),repeating-linear-gradient(90deg,oklch(1 0 0/.28) 0 1px,transparent 1px 6px)"
      : variant === "dots"
        ? "radial-gradient(oklch(1 0 0/.5) 1px, transparent 1.4px)"
        : "none";

  return (
    <span
      aria-hidden
      className={`tape-strip h-6 w-24 ${className}`}
      style={{
        backgroundImage: pattern === "none" ? undefined : pattern,
        backgroundSize: variant === "dots" ? "7px 7px" : undefined,
      }}
    />
  );
}

/** Torn cream note pinned onto the night sky. */
export function PaperNote({
  children,
  className = "",
  tilt = 0,
  style,
}: { children: ReactNode; className?: string; style?: CSSProperties } & Tilt) {
  return (
    <div
      className={`relative paper torn-edge px-6 py-7 sm:px-8 sm:py-9 ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, ...style }}
    >
      {children}
    </div>
  );
}

/** Ruled notebook page with a spiral binding. */
export function NotebookCard({
  children,
  className = "",
  tilt = 0,
}: { children: ReactNode; className?: string } & Tilt) {
  return (
    <div
      className={`relative paper rounded-sm py-7 pl-10 pr-6 sm:pl-12 ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <span aria-hidden className="absolute inset-y-4 left-4 flex flex-col justify-between">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="block h-2 w-2 rounded-full bg-night-deep/70 shadow-inner" />
        ))}
      </span>
      {children}
    </div>
  );
}

/** Polaroid-style photo frame with a handwritten caption. */
export function Polaroid({
  src,
  alt,
  caption,
  tilt = 0,
  className = "",
  tape = "plain",
  eager = false,
  aspect = "aspect-[4/5]",
}: {
  src: string;
  alt: string;
  caption?: string;
  tilt?: number;
  className?: string;
  tape?: "plain" | "grid" | "dots" | "none";
  eager?: boolean;
  aspect?: string;
}) {
  return (
    <figure
      className={`relative paper animate-float-soft p-3 pb-10 sm:p-4 sm:pb-12 ${className}`}
      style={{ ["--tilt" as string]: `${tilt}deg`, transform: `rotate(${tilt}deg)` }}
    >
      {tape !== "none" && (
        <Tape
          variant={tape}
          className="-top-3 left-1/2 -translate-x-1/2 -rotate-2"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`${aspect} w-full rounded-[2px] object-cover`}
      />
      {caption && (
        <figcaption className="hand absolute inset-x-0 bottom-2 text-center text-lg text-ink sm:text-xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Section heading in the cursive night style. */
export function ScriptHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`script glow-text text-4xl leading-[1.1] text-moon sm:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="hand text-lg tracking-[0.28em] text-gold uppercase sm:text-xl">{children}</p>
  );
}
