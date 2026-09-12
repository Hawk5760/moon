import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Starfield } from "@/components/night/Starfield";
import { MoonNav } from "@/components/MoonNav";
import { MusicToggle } from "@/components/MusicToggle";
import { Opening } from "@/components/sections/Opening";
import { Birthday } from "@/components/sections/Birthday";
import { Hackathon } from "@/components/sections/Hackathon";
import { Memories } from "@/components/sections/Memories";
import { Letter } from "@/components/sections/Letter";
import { SameMoon } from "@/components/sections/SameMoon";
import { Celebration } from "@/components/sections/Celebration";
import { Ending } from "@/components/sections/Ending";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { config } from "@/config/celebration";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy Birthday, ${config.name} 🌙 — and congrats, hackathon winner` },
      {
        name: "description",
        content: `A cinematic moonlit night for ${config.name}: birthday wishes, her hackathon win, shared memories, a quiz and a letter under the moon.`,
      },
      { property: "og:title", content: `Under the Same Moon — for ${config.name}` },
      {
        property: "og:description",
        content: `Birthday wishes and a hackathon celebration for ${config.name}, told in moon phases.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [replayKey, setReplayKey] = useState(0);
  const ref = useRevealOnScroll<HTMLDivElement>();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const replay = () => {
    setReplayKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Starfield />
      <MusicToggle />
      <MoonNav />

      <main key={replayKey} ref={ref} className="relative">
        <Opening onEnter={() => scrollTo("birthday")} />
        <Birthday />
        <Hackathon />
        <Memories />
        <Letter />
        <SameMoon />
        <Celebration />
        <Ending onReplay={replay} />
      </main>
    </>
  );
}
