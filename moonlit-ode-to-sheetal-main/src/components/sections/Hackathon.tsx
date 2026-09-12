import { Eyebrow, Polaroid } from "@/components/scrap/Paper";
import { config } from "@/config/celebration";

export function Hackathon() {
  const { hackathon } = config;

  return (
    <section id="win" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule"
      />
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow>Transmission · winner</Eyebrow>
        <h2 className="reveal mt-5 font-body text-3xl font-extrabold tracking-[0.18em] text-moon uppercase glow-text sm:text-5xl">
          {hackathon.heading} 🏆
        </h2>
        <div className="mt-12 flex justify-center">
          <Polaroid
            src={hackathon.photo}
            alt={`${config.name} at ${hackathon.hackathonName}`}
            caption={hackathon.photoCaption}
            tilt={-2}
            tape="grid"
            aspect="aspect-[16/10]"
            className="reveal mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
