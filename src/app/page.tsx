"use client";

import { InputField } from "./components/input/input-field";
import { useState } from "react";
import { BotCard } from "./components/ui/bot-card";
import type { ChangeEvent } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setInputValue(value);

  return (
    <main className="flex min-h-screen w-full flex-row pl-24 pt-24">
      {/* Probably gonna put a sidebar here */}

      <div className="flex flex-col gap-5 w-[50%] h-full">
        <InputField
          className="w-52 xl:w-96"
          label="Name"
          inputValue={inputValue}
          handleChange={handleChange}
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
          // You would pass in the creator here
        />
      </div>
    </main>
  );
}
