import { Moon } from "@/components/night/Starfield";
import { config } from "@/config/celebration";

export function SameMoon() {
  return (
    <section
      id="samemoon"
      className="relative flex min-h-[80svh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      <Moon size={150} className="animate-float-soft" />
      <p className="script glow-text reveal mx-auto mt-12 max-w-3xl text-3xl leading-[1.25] text-moon sm:text-5xl">
        {config.sameMoon.line}
      </p>
      <p className="reveal mx-auto mt-8 max-w-xl font-body text-sm leading-relaxed text-moon/70 sm:text-base">
        {config.sameMoon.wish}
      </p>
    </section>
  );
}
