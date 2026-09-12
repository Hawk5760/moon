import { config } from "@/config/celebration";

export function Opening({ onEnter }: { onEnter: () => void }) {
  return (
    <section
      id="opening"
      className="relative min-h-[100svh] overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div aria-hidden className="hero-moon">
        <span className="hero-crater hero-crater-one" />
        <span className="hero-crater hero-crater-two" />
        <span className="hero-crater hero-crater-three" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-12rem)] max-w-7xl flex-col justify-center">
        <p className="animate-rise-in text-[0.65rem] font-bold tracking-[0.3em] text-gold uppercase sm:text-xs">
          11 · September · A night for {config.name}
        </p>
        <h1
          className="hero-title mt-8 animate-rise-in text-moon"
          style={{ animationDelay: "0.2s" }}
        >
          Tonight is a<br />
          little <em>different…</em>
        </h1>
        <p
          className="mt-7 max-w-md animate-rise-in text-base text-moon/90 sm:mt-9 sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          Because tonight is about {config.name}.
        </p>
        <button
          onClick={onEnter}
          className="mt-7 w-fit animate-rise-in border-b border-border pb-3 text-xs font-semibold tracking-[0.22em] text-moon uppercase transition hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:text-sm"
          style={{ animationDelay: "0.5s" }}
        >
          {config.opening.button} <span className="ml-4" aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
