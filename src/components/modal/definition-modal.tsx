"use client";

import Link from "next/link";
import { cn } from "../lib/cn";
import { NextImage } from "../ui/next-image";
import { BotCardGlow } from "../bot/card/bot-card-blur";
import { CustomIcon } from "../ui/custom-icon";
import { preventBubbling } from "../lib/utils";
import { FavoriteBotButton } from "../bot/card/favorite-bot-button";
import type { Bot } from "../lib/types/bot";

type DefinitionModalProps = {
  bot: Bot;
  closeModal: () => void;
};

export function DefinitionModal({
  bot,
  closeModal,
}: DefinitionModalProps): JSX.Element {
  const src =
    bot.avatar_url !== "/assets/harley.png"
      ? bot.avatar_url
      : "/assets/harley.png";

  return (
    <section
      className="outline-glow relative flex h-full w-full flex-col rounded-lg bg-transparent
        [&>div]:rounded-lg"
    >
      <BotCardGlow src={bot.avatar_url} />

      <div className="non-selectable relative h-52 w-full">
        <NextImage
          imgClassName="z-20 rounded-t-lg"
          src={src}
          alt={bot.id}
          layout="fill"
          draggable={false}
          useSkeleton
        />

        <NextImage
          imgClassName="z-0 rounded-t-lg blur-xl block xs:hidden z-10"
          src={src}
          alt={bot.id}
          layout="fill"
          draggable={false}
          quality={50}
          useSkeleton
        />

        <FavoriteBotButton
          buttonClassName="z-30 top-1 left-1"
          className="h-6 w-6"
        />

        <button
          className="absolute right-1 top-1 z-30 rounded-full bg-black/20 p-1 backdrop-blur-md"
          onClick={closeModal}
        >
          <CustomIcon className="h-6 w-6 text-white/60" iconName="XMarkIcon" />
        </button>

        <span
          className="text-shadow absolute bottom-1 right-1 z-30 rounded-xl bg-black/40 px-2 py-1
            text-xs shadow-black xs:bg-black/20 xs:backdrop-blur-md"
        >
          {bot.token_count} tokens
        </span>
      </div>

      <div
        className="z-0 flex h-full flex-col gap-3 !rounded-t-none bg-black/50 px-3 py-2
          backdrop-blur-lg xs:bg-black/20"
      >
        <span className="mb-3 text-2xl font-bold">{bot.name}</span>

        <div className="w-full overflow-y-auto text-white/70">{bot.title}</div>

        <div className="mt-auto flex w-full flex-row items-center gap-3">
          <Link
            className="mb-1 rounded-full bg-white/50 p-1"
            href={`/chatbot/${bot.id}`}
          >
            <CustomIcon
              className="h-6 w-6 text-black"
              iconName="InformationIcon"
            />
          </Link>

          <Link
            className="mb-1 flex h-8 w-full items-center justify-center rounded-md bg-white text-xl
              font-semibold text-black"
            href={`/fake-chat/${bot.id}`}
          >
            Chat
          </Link>
        </div>
      </div>

      <div
        className="absolute inset-0 -z-10 mt-10 bg-gradient-to-t from-black from-40%
          via-transparent to-transparent blur-xl"
      />
    </section>
  );
}
