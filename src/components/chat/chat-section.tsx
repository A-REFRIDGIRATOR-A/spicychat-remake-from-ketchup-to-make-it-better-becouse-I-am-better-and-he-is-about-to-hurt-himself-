"use client";

import { cn } from "../lib/cn";
import { useState } from "react";
import { InputField } from "../input/input-field";
import { ChatBubble } from "./chat-bubble";
import { CustomIcon } from "../ui/custom-icon";
import type { Bot } from "../lib/types/bot";
import type { ChangeEvent } from "react";

type ChatSectionProps = {
  className?: string;
  bot: Bot;
};

export function ChatSection({ className, bot }: ChatSectionProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const src =
    bot.avatar_url !== "/assets/harley.png"
      ? bot.avatar_url
      : "/assets/harley.png";

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setInputValue(value);

  return (
    <div
      className={cn(
        "relative h-full space-y-5 p-3 xs:overflow-y-auto",
        className,
      )}
    >
      <ChatBubble src={src} name={bot.name} message={bot.greeting} />

      <div
        className="fixed bottom-0 left-0 right-0 z-[60] flex h-16 items-center justify-center gap-3
          bg-black px-3 xs:px-0"
      >
        <InputField
          inputId="user-input"
          className="w-full xs:max-w-[94rem]"
          placeholder={`Message ${bot.name}...`}
          inputValue={inputValue}
          handleChange={handleChange}
        />

        <button type="button" aria-label="send-message">
          <CustomIcon iconName="MessageIcon" />
        </button>
      </div>
    </div>
  );
}
