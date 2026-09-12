import { Eyebrow, Polaroid, ScriptHeading } from "@/components/scrap/Paper";
import { config } from "@/config/celebration";

const tilts = [-3, 2.5, -1.5, 3, -2];

export function Memories() {
  return (
    <section id="memories" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Eyebrow>Memories in moon phases</Eyebrow>
          <ScriptHeading className="reveal mt-3">Collect beautiful moments</ScriptHeading>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {config.memories.map((m, i) => (
            <article key={m.title} className="reveal flex flex-col items-center">
              <span className="text-3xl" aria-hidden>
                {m.phase}
              </span>
              <h3 className="hand mt-2 text-2xl text-gold">{m.title}</h3>
              <Polaroid
                src={m.photo}
                alt={m.title}
                caption={m.caption}
                tilt={tilts[i % tilts.length] ?? 0}
                tape={i % 2 === 0 ? "grid" : "dots"}
                className="mt-5 w-full max-w-[17rem]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
