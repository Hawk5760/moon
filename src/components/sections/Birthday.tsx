import { Moon } from "@/components/night/Starfield";
import { NotebookCard, PaperNote, Polaroid, Tape } from "@/components/scrap/Paper";
import { config } from "@/config/celebration";
import sheetalTelescope from "@/assets/sheetal-telescope.png";
import moonOcean from "@/assets/moon-ocean.jpg";

export function Birthday() {
  return (
    <section id="birthday" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal relative">
            <Moon size={84} className="absolute -top-6 -left-2 hidden sm:block" />
            <h2 className="script glow-text pt-4 text-6xl leading-[0.95] text-moon sm:pt-10 sm:text-8xl">
              Happy
              <br />
              <span className="pl-8 sm:pl-16">Birthday!</span>
            </h2>
            <div className="mt-6 max-w-md -rotate-1 bg-periwinkle/25 px-5 py-4 backdrop-blur-[1px]">
              <p className="hand text-xl text-moon sm:text-2xl">
                {config.birthday.wish}
              </p>
            </div>

            <NotebookCard tilt={-2} className="reveal mt-12 max-w-sm">
              <p className="hand text-2xl text-ink underline decoration-periwinkle decoration-2 underline-offset-4">
                reminder ♡
              </p>
              <ul className="mt-4 space-y-2.5">
                {config.birthday.reminders.map((item) => (
                  <li key={item} className="hand flex items-center gap-3 text-xl text-ink">
                    <span className="text-gold">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </NotebookCard>
          </div>

          <div className="reveal grid grid-cols-2 gap-5 sm:gap-7">
            <Polaroid
              src={sheetalTelescope}
              alt="Sheetal looking at Venus through telescope"
              caption="moonlight talks ♡"
              tilt={2}
              tape="grid"
              eager
              className="col-span-2 max-w-sm justify-self-end"
            />
            <Polaroid
              src={moonOcean}
              alt="Moonlight on the ocean"
              caption="just breathe ♡"
              tilt={-3}
              tape="plain"
              className="col-span-2 max-w-[16rem] sm:max-w-xs"
            />
            <PaperNote tilt={3} className="col-span-2 max-w-[15rem] justify-self-end">
              <Tape variant="dots" className="-top-3 left-6 -rotate-6" />
              <p className="hand text-xl leading-snug text-ink">
                your light is rare and beautiful ♡
              </p>
            </PaperNote>
          </div>
        </div>
      </div>
    </section>
  );
}
