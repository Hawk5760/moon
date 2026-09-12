import { useEffect, useRef, useState } from "react";
import { config } from "@/config/celebration";

/**
 * Music toggle. Plays config.music.url when set,
 * otherwise a soft ambient chord generated in the browser.
 */
export function MusicToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      void ctxRef.current?.close();
    };
  }, []);

  const startAmbient = () => {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = ctxRef.current ?? new Ctx();
    ctxRef.current = ctx;
    void ctx.resume();

    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);
    gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2);
    gainRef.current = gain;

    [174.6, 261.6, 349.2, 392].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const detune = ctx.createGain();
      detune.gain.value = i === 0 ? 0.9 : 0.4;
      osc.connect(detune).connect(gain);
      osc.start();
    });
  };

  const stopAmbient = () => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    if (ctx && gain) gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
  };

  const toggle = () => {
    const next = !on;
    setOn(next);

    if (config.music.url) {
      if (!audioRef.current) {
        const audio = new Audio(config.music.url);
        audio.loop = true;
        audio.volume = 0.4;
        audioRef.current = audio;
      }
      if (next) void audioRef.current.play().catch(() => undefined);
      else audioRef.current.pause();
      return;
    }

    if (next) startAmbient();
    else stopAmbient();
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn music off" : "Turn music on"}
      className="fixed top-4 right-4 z-40 flex h-11 items-center gap-2 border border-border bg-night/80 px-4 text-xs tracking-[0.14em] text-moon uppercase backdrop-blur-md transition hover:border-gold/70 hover:text-gold sm:top-7 sm:right-7 sm:h-12 sm:px-5"
    >
      <span className="text-lg" aria-hidden>{on ? "♫" : "♪"}</span>
      <span className="hidden sm:inline">Sound {on ? "on" : "off"}</span>
      <span
        aria-hidden
        className={`absolute inset-0 transition ${
          on ? "shadow-[0_0_22px_var(--gold)]" : ""
        }`}
      />
    </button>
  );
}
