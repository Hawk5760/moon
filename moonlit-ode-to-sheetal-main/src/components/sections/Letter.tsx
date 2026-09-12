import { useState } from "react";
import { Eyebrow, ScriptHeading } from "@/components/scrap/Paper";
import { config } from "@/config/celebration";

export function Letter() {
  const [open, setOpen] = useState(false);
  const { letter } = config;

  return (
    <section id="letter" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>A letter under the moon</Eyebrow>
        <ScriptHeading className="reveal mt-3">💌</ScriptHeading>

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="reveal group mx-auto mt-12 block w-full max-w-md focus-visible:outline-none"
            aria-label="Open the letter"
          >
            <div className="relative aspect-[3/2] w-full paper shadow-paper transition duration-500 group-hover:-translate-y-2">
              <div
                aria-hidden
                className="absolute inset-0 origin-top transition-transform duration-500 group-hover:[transform:rotateX(24deg)]"
                style={{
                  background: "var(--paper-shade)",
                  clipPath: "polygon(0 0, 100% 0, 50% 62%)",
                }}
              />
              <span className="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-night text-lg text-gold shadow-glow">
                🌙
              </span>
              <span className="hand absolute inset-x-0 bottom-4 text-lg text-ink/70">
                {letter.envelopeHint}
              </span>
            </div>
          </button>
        ) : (
          <article className="paper torn-edge mt-12 animate-rise-in px-7 py-10 text-left sm:px-12 sm:py-14">
            <p className="script text-4xl text-ink sm:text-5xl">{letter.greeting}</p>
            <div className="mt-6 space-y-4">
              {letter.body.map((p) => (
                <p key={p} className="font-body text-[0.95rem] leading-relaxed text-ink/85">
                  {p}
                </p>
              ))}
            </div>
            <p className="hand mt-8 text-2xl text-ink">{letter.signoff}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-8 text-[0.68rem] tracking-[0.22em] text-ink/50 uppercase transition hover:text-ink"
            >
              Fold it back
            </button>
          </article>
        )}
      </div>
    </section>
  );
}
