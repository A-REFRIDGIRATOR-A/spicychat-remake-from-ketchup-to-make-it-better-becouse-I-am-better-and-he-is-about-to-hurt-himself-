"use client";

import { cn } from "../lib/cn";
import { ChatSection } from "./chat-section";
import { DetailsCard } from "./details-card";
import { useState } from "react";
import type { Bot } from "../lib/types/bot";

type ChatLayoutProps = {
  bot: Bot;
};

const pages = ["chat", "details"] as const;

type Page = (typeof pages)[number];

export function ChatLayout({ bot }: ChatLayoutProps): JSX.Element {
  const [page, setPage] = useState<Page>("chat");

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="mb-3 flex h-12 w-full gap-3 bg-gray-dark px-3 xs:hidden">
        <button onClick={() => setPage("chat")}>Chat</button>

        <button onClick={() => setPage("details")}>Details</button>
      </div>

      <div
        className={cn(
          `relative mb-16 flex h-auto w-full flex-row gap-x-3 overflow-x-hidden
          overflow-y-hidden p-2 xs:mb-3 xs:h-[calc(100vh_-_11rem)] xs:overflow-visible
          xs:p-0 [&>div]:rounded-md [&>div]:bg-gray-dark`,
          page !== "chat" && "overflow-visible",
        )}
      >
        <ChatSection
          className={cn(
            "transition duration-500",
            page !== "chat" &&
              "scale-90 opacity-50 blur-sm [&>div:last-child]:hidden",
          )}
          bot={bot}
        />

        <DetailsCard bot={bot} />
      </div>

      <DetailsCard
        className={cn(
          `absolute left-0 right-0 top-16 z-10 flex h-auto translate-x-[30rem] rounded-b-md
          bg-gray-dark xs:hidden md:hidden`,
          page === "details" && "translate-x-5",
        )}
        bot={bot}
      />
    </div>
  );
}
