import { useState } from "react";
import { Eyebrow, PaperNote, ScriptHeading } from "@/components/scrap/Paper";
import { config } from "@/config/celebration";

export function Quiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = config.quiz[index]!;
  const isLast = index === config.quiz.length - 1;

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <section id="quiz" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Do you remember?</Eyebrow>
        <ScriptHeading className="reveal mt-3">A little memory test</ScriptHeading>

        <PaperNote tilt={-1} className="reveal mt-12 text-left">
          {done ? (
            <div className="animate-rise-in text-center">
              <p className="hand text-3xl text-ink">
                {score} / {config.quiz.length} remembered ♡
              </p>
              <p className="mt-3 font-body text-sm text-ink/70">
                Some of it we'd both get wrong. That's allowed.
              </p>
              <button
                onClick={restart}
                className="mt-6 rounded-full border border-ink/30 px-6 py-2 text-xs tracking-[0.2em] text-ink uppercase transition hover:bg-ink hover:text-paper"
              >
                Play again
              </button>
            </div>
          ) : (
            <div key={index} className="animate-rise-in">
              <p className="font-body text-[0.68rem] tracking-[0.22em] text-ink/55 uppercase">
                Question {index + 1} of {config.quiz.length}
              </p>
              <p className="hand mt-2 text-2xl leading-snug text-ink sm:text-3xl">{q.question}</p>

              <ul className="mt-6 space-y-3">
                {q.options.map((opt, i) => {
                  const revealed = picked !== null;
                  const correct = i === q.answer;
                  return (
                    <li key={opt}>
                      <button
                        onClick={() => choose(i)}
                        disabled={revealed}
                        className={`hand w-full rounded-sm border px-4 py-2.5 text-left text-xl transition ${
                          revealed && correct
                            ? "border-ink bg-ink/10 text-ink"
                            : revealed && i === picked
                              ? "border-destructive/60 text-ink/60 line-through"
                              : "border-ink/25 text-ink hover:border-ink hover:bg-ink/5"
                        }`}
                      >
                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {picked !== null && (
                <div className="mt-6 animate-rise-in border-t border-ink/20 pt-4">
                  <p className="font-body text-sm leading-relaxed text-ink/80">{q.reveal}</p>
                  <button
                    onClick={next}
                    className="mt-4 rounded-full bg-ink px-6 py-2 text-xs tracking-[0.2em] text-paper uppercase transition hover:opacity-85"
                  >
                    {isLast ? "See result" : "Next"}
                  </button>
                </div>
              )}
            </div>
          )}
        </PaperNote>
      </div>
    </section>
  );
}
