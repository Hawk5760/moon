import { useEffect, useState } from "react";

export const NAV_ITEMS = [
  { id: "opening", phase: "🌑", label: "Opening" },
  { id: "birthday", phase: "🌒", label: "Birthday" },
  { id: "win", phase: "🌓", label: "Hackathon win" },
  { id: "memories", phase: "🌕", label: "Memories" },
  { id: "letter", phase: "🌗", label: "Letter" },
  { id: "samemoon", phase: "🌘", label: "Same moon" },
  { id: "celebration", phase: "🌙", label: "Celebration" },
  { id: "ending", phase: "✦", label: "Ending" },
];

export function MoonNav() {
  const [active, setActive] = useState("opening");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -30% 0px" },
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Moon phase navigation"
      className="fixed top-1/2 right-2 z-40 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-border bg-night/60 px-1.5 py-3 backdrop-blur-md md:flex"
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => go(item.id)}
          title={item.label}
          aria-label={item.label}
          aria-current={active === item.id}
          className={`grid h-8 w-8 place-items-center rounded-full text-sm transition ${
            active === item.id
              ? "scale-110 bg-gold/20 opacity-100 shadow-[0_0_18px_var(--gold)]"
              : "opacity-45 hover:opacity-90"
          }`}
        >
          {item.phase}
        </button>
      ))}
    </nav>
  );
}
