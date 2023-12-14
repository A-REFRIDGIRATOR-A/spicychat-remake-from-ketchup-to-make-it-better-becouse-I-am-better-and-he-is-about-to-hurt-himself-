"use client";

import { BotCard } from "./components/bot/bot-card";
import { Header } from "./components/home/header";
import { FeaturedSection } from "./components/home/featured-section";

export default function Home() {
  return (
    <main className="flex w-full justify-center gap-0 lg:gap-4">
      <div className="hidden xs:hidden xl:w-96 xl:flex border-rr"></div>

      <div className="flex min-h-screen w-full flex-col max-w-6xl">
        <Header />

        <div className="flex flex-col items-center gap-20 w-full h-full">
          <FeaturedSection />

          <div
            className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-y-5
                      xl:grid-cols-4 xl:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 w-full
                      gap-x-8 xs:gap-x-0 h-full px-6 xs:px-0"
          >
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
      <div className="hidden w-96 border-ll xs:hidden xl:flex"></div>
    </main>
  );
}
