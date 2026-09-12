import { useState } from "react";
import { Moon } from "@/components/night/Starfield";
import { Confetti } from "@/components/Confetti";
import { config } from "@/config/celebration";

export function Celebration() {
  const [lit, setLit] = useState(true);
  const [burst, setBurst] = useState(0);

  const blowOut = () => {
    setLit(false);
    setBurst((b) => b + 1);
  };

  const relight = () => setLit(true);

  return (
    <section
      id="celebration"
      className="relative flex min-h-[90svh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      {burst > 0 && <Confetti key={burst} />}

      <div className="relative grid h-56 w-full max-w-sm place-items-center sm:h-64">
        {/* Moon transforms into cake + trophy */}
        <div
          className={`absolute transition-all duration-700 ${
            lit ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <Moon size={130} />
        </div>

        <div
          className={`absolute flex items-end gap-6 transition-all duration-700 ${
            lit ? "scale-75 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <span className="text-7xl drop-shadow-[0_0_28px_var(--gold)] sm:text-8xl">🎂</span>
          <span className="text-6xl drop-shadow-[0_0_28px_var(--gold)] sm:text-7xl">🏆</span>
        </div>
      </div>

      {/* Candles */}
      <button
        onClick={lit ? blowOut : relight}
        aria-label={lit ? "Blow out the candles" : "Light the candles again"}
        className="group -mt-6 flex items-end gap-3 rounded-full px-6 py-3 focus-visible:outline-none"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="flex flex-col items-center">
            <span
              className={`h-4 w-2 rounded-full transition-opacity duration-300 ${
                lit ? "animate-flicker opacity-100" : "opacity-0"
              }`}
              style={{
                background:
                  "radial-gradient(circle at 50% 70%, var(--moon), var(--gold) 60%, transparent)",
                animationDelay: `${i * 0.2}s`,
              }}
            />
            <span className="mt-1 h-8 w-1.5 rounded-sm bg-paper/90 transition group-hover:h-9" />
          </span>
        ))}
      </button>
      <p className="hand mt-2 text-lg text-gold/80">{config.celebration.hint}</p>

      <h2 className="script glow-text reveal mt-10 text-4xl leading-tight text-moon sm:text-6xl">
        {config.celebration.title}
      </h2>
      <p className="reveal mt-4 font-body text-sm tracking-[0.18em] text-gold uppercase sm:text-base">
        {config.celebration.subtitle}
      </p>
    </section>
  );
}
