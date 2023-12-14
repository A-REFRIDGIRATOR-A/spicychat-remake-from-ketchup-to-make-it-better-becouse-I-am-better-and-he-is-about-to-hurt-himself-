"use client";

import { BotCard } from "./components/bot/bot-card";
import { Header } from "./components/home/header";
import { FeaturedBot } from "./components/bot/featured-bot";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      {/* Probably gonna put a sidebar here */}
      <div className="relative px-5 xs:px-96 pt-5 self-start">
        <div className="flex flex-col gap-3 group/featured">
          <h1
            className="group-hover/featured:translate-x-10 transition-transform
                      duration-500 delay-400 text-3xl font-bold"
          >
            Featured
          </h1>

          <FeaturedBot />
        </div>
      </div>

      <div className="flex min-h-screen w-full flex-row px-5 xs:px-96 pt-24">
        <div className="flex flex-col gap-5 w-full h-full">
          <div className="grid grid-flow-row grid-cols-2 grid-rows-2 xs:grid-cols-4 xs:grid-rows-4 w-full">
            <BotCard
              src="/assets/harley.png"
              name="Harley Quinn"
              description={`Harley Quinn (Harleen Frances Quinzel) is a character appearing in
                            American comic books published by DC Comics. She was created by Paul
                            Dini and Bruce Timm for Batman: The Animated Series as a henchwoman
                            for the Joker, and debuted in its 22nd episode, "Joker's Favor", on
                            September 11, 1992. While intended to appear in one episode, Quinn
                            became a recurring character within the DC Animated Universe (DCAU)
                            as the Joker's sidekick and love interest, and was adapted into DC
                            Comics' canon seven years later, beginning with the one-shot Batman:
                            Harley Quinn #1 (October 1999). Quinn's origin story features her as
                            a former psychologist at Gotham City's Arkham Asylum who was
                            manipulated by and fell in love with the Joker, her patient,
                            eventually becoming his accomplice and lover. The character's alias
                            is a play on the stock character Harlequin from the 16th-century
                            Italian theater commedia dell'arte.`}
              creator="User123"
              messages={123}
              recommended
              // You would pass in the creator here
            />

            <BotCard
              src="/assets/harley.png"
              name="Harley Quinn"
              description={`Harley Quinn (Harleen Frances Quinzel) is a character appearing in
            American comic books published by DC Comics. She was created by Paul
            Dini and Bruce Timm for Batman: The Animated Series as a henchwoman
            for the Joker, and debuted in its 22nd episode, "Joker's Favor", on
            September 11, 1992. While intended to appear in one episode, Quinn
            became a recurring character within the DC Animated Universe (DCAU)
            as the Joker's sidekick and love interest, and was adapted into DC
            Comics' canon seven years later, beginning with the one-shot Batman:
            Harley Quinn #1 (October 1999). Quinn's origin story features her as
            a former psychologist at Gotham City's Arkham Asylum who was
            manipulated by and fell in love with the Joker, her patient,
            eventually becoming his accomplice and lover. The character's alias
            is a play on the stock character Harlequin from the 16th-century
            Italian theater commedia dell'arte.`}
              creator="User123"
              messages={123}
              recommended
              // You would pass in the creator here
            />
          </div>
        </div>
      </div>
    </main>
  );
}
