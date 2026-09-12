import { config } from "@/config/celebration";

export function Ending({ onReplay }: { onReplay: () => void }) {
  return (
    <section
      id="ending"
      className="relative flex min-h-[85svh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="script reveal max-w-2xl text-3xl leading-snug text-moon/85 sm:text-5xl">
        {config.ending.line1}
      </p>
      <p className="hand reveal mt-8 max-w-xl text-2xl text-periwinkle sm:text-3xl">
        {config.ending.line2}
      </p>

      <button
        onClick={onReplay}
        className="mt-14 rounded-full border border-gold/60 px-7 py-2.5 text-xs tracking-[0.24em] text-gold uppercase transition hover:bg-gold hover:text-primary-foreground"
      >
        ↺ Replay the night
      </button>

      <div className="mt-16 w-full max-w-sm">
        <p className="hand text-lg text-moon/60">moonlight playlist ♡</p>
        <ul className="mt-3 space-y-1.5">
          {config.music.playlist.map((track) => (
            <li key={track} className="font-body text-xs text-moon/45">
              ♪ {track}
            </li>
          ))}
        </ul>
      </div>

      <p className="hand mt-14 text-lg text-gold/60">you are my moonlight</p>
    </section>
  );
}
