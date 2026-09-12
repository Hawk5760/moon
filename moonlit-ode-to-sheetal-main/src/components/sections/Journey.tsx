import { useState } from "react";
import { Eyebrow, ScriptHeading } from "@/components/scrap/Paper";
import { config } from "@/config/celebration";

export function Journey() {
  const [active, setActive] = useState(config.journey.length - 1);
  const step = config.journey[active] ?? config.journey[0]!;

  return (
    <section id="journey" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>The journey</Eyebrow>
        <ScriptHeading className="reveal mt-3">Idea to win</ScriptHeading>

        <div className="reveal relative mt-14">
          <div aria-hidden className="absolute top-6 right-0 left-0 h-px gold-rule" />
          <ol className="relative grid grid-cols-5 gap-1 sm:gap-4">
            {config.journey.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.phase}>
                  <button
                    onClick={() => setActive(i)}
                    aria-current={isActive}
                    className="group flex w-full flex-col items-center gap-3 focus-visible:outline-none"
                  >
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-full border text-lg transition ${
                        isActive
                          ? "border-gold bg-gold/20 text-gold shadow-[0_0_28px_var(--gold)]"
                          : "border-border bg-night/70 text-moon/70 group-hover:border-gold/60"
                      }`}
                    >
                      {s.emoji}
                    </span>
                    <span
                      className={`hand text-base transition sm:text-xl ${
                        isActive ? "text-gold" : "text-moon/60"
                      }`}
                    >
                      {s.phase}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <p
          key={active}
          className="hand mx-auto mt-10 max-w-xl animate-rise-in text-2xl leading-snug text-moon sm:text-3xl"
        >
          {step.text}
        </p>
      </div>
    </section>
  );
}
