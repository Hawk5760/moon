/**
 * =====================================================================
 *  EDIT EVERYTHING HERE — this is the only file you need to change.
 *  Name, photos, hackathon details, memories, quiz, letter and music.
 * =====================================================================
 */

import moonTrees from "@/assets/moon-trees.jpg";
import moonOcean from "@/assets/moon-ocean.jpg";
import moonWindow from "@/assets/moon-window.jpg";
import hackathonPhoto from "@/assets/hackathon-win.png";
import sheetalGuitar from "@/assets/sheetal-guitar.png";
import sheetalIeee from "@/assets/sheetal-ieee.png";
import sheetalFlowers from "@/assets/sheetal-flowers.png";
import sheetalPortrait from "@/assets/sheetal-portrait.png";

export const config = {
  /** Who this night is for */
  name: "Sheetal",

  opening: {
    line: "Tonight is a little different…",
    subline: "Because tonight is about Sheetal.",
    button: "Enter the night",
  },

  birthday: {
    title: "Happy Birthday, Sheetal",
    wish: "wishing you a day as beautiful and special as you are.",
    reminders: [
      "be kind",
      "stay positive",
      "dream big",
      "make memories",
      "have fun",
      "be you!",
    ],
  },

  /** 🏆 Hackathon win — fully editable */
  hackathon: {
    heading: "CONGRATULATIONS, SHEETAL!",
    hackathonName: "Smart Horizon 2026 International Hackathon",
    projectName: "Lunar",
    teamName: "Team Moonlight",
    achievement: "Third Place Winner",
    photo: hackathonPhoto,
    photoCaption: "the night it all paid off",
    note: "You didn't just build a project. You out-built the doubt.",
  },

  /** The journey timeline */
  journey: [
    { phase: "Idea", emoji: "💡", text: "A half-formed thought at 1 AM that refused to go away." },
    { phase: "Build", emoji: "⌨️", text: "Coffee, commits, and a whiteboard that never stayed clean." },
    { phase: "Chaos", emoji: "🌀", text: "Bugs at 4 AM. Nothing worked. Everything was on fire." },
    { phase: "Pitch", emoji: "🎤", text: "Two minutes to explain three sleepless nights." },
    { phase: "WIN", emoji: "🏆", text: "Your name, called out loud. You earned every second of it." },
  ],

  /** Friendship told in moon phases — swap photos & captions freely */
  memories: [
    { phase: "🌑", title: "Beginning", caption: "two strangers, one very ordinary day.", photo: sheetalPortrait },
    { phase: "🌒", title: "Growing", caption: "conversations that stopped needing a reason.", photo: sheetalFlowers },
    { phase: "🌓", title: "Crazy memories", caption: "the plans nobody else would have said yes to.", photo: sheetalGuitar },
    { phase: "🌕", title: "Best moments", caption: "full light, full laughter, nothing missing.", photo: sheetalIeee },
    { phase: "🌖", title: "Things changed", caption: "different cities, same sky, same people.", photo: moonOcean },
  ],

  /** 5 "Do you remember?" questions */
  quiz: [
    {
      question: "Do you remember what we always said we'd do 'someday'?",
      options: ["A midnight road trip", "Start a company", "Learn guitar"],
      answer: 0,
      reveal: "You said we'd drive till the streetlights ran out. Still on the list.",
    },
    {
      question: "Do you remember what you always ordered, no matter where we were?",
      options: ["Cold coffee", "Masala chai", "Lemon soda"],
      answer: 1,
      reveal: "Chai. Every single time. Non-negotiable.",
    },
    {
      question: "Do you remember what you'd stop everything to look at?",
      options: ["Dogs", "The moon", "Old bookstores"],
      answer: 1,
      reveal: "The moon. Mid-sentence, mid-walk, every time.",
    },
    {
      question: "Do you remember what you said the night before the hackathon?",
      options: ["\"We're doomed.\"", "\"We're winning this.\"", "\"Let's just submit something.\""],
      answer: 1,
      reveal: "You called it before anyone believed it.",
    },
    {
      question: "Do you remember the song that was always playing?",
      options: ["Moon River", "Talking To The Moon", "The Night We Met"],
      answer: 1,
      reveal: "It played so often it stopped being a song and became a place.",
    },
  ],

  /** 💌 The letter */
  letter: {
    envelopeHint: "tap to open",
    greeting: "Dear Sheetal,",
    body: [
      "Happy birthday. I hope today is quiet where it should be and loud where it counts.",
      "Watching you win that hackathon wasn't surprising — it was confirmation. You've always been the person who keeps going after everyone else has decided it's impossible. That stubbornness has a name now: winner.",
      "Thank you for the late-night talks, the ridiculous plans, and for being someone who noticed the moon.",
      "Whatever this year builds, I hope it's exactly your size — and then a little bigger.",
    ],
    signoff: "Always cheering, from wherever I am.",
  },

  sameMoon: {
    line: "We may not stand in the same place anymore… but we're still under the same moon.",
    wish: "May this year be full of rooms you walk into confidently, work you're proud of, and nights that feel like the good ones did.",
  },

  celebration: {
    title: "Happy Birthday, Sheetal 🎂🌙",
    subtitle: "And congratulations, Hackathon Winner! 🏆",
    hint: "click the candles",
  },

  ending: {
    line1: "Some chapters end. Some memories don't.",
    line2: "Keep building. Keep dreaming. Keep looking up. 🌙",
  },

  /** 🎵 Music — paste a direct audio URL (.mp3). Leave empty for a soft ambient hum. */
  music: {
    url: "",
    playlist: [
      "Moon River — Frank Ocean",
      "Talking To The Moon — Bruno Mars",
      "Space Song — Beach House",
      "All I Want — Kodaline",
      "The Night We Met — Lord Huron",
    ],
  },
};

export type Config = typeof config;
