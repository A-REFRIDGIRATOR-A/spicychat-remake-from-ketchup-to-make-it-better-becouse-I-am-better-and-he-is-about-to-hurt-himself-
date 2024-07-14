import Link from "next/link";
import { CustomIcon } from "../../ui/custom-icon";
import { NextImage } from "../../ui/next-image";
import { Avatar } from "../../ui/avatar";
import { UserTooltip } from "../../ui/user-tooltip";
import { FavoriteBotButton } from "./favorite-bot-button";
import { formatNumber } from "../../lib/utils";
import { BotCardGlow } from "./bot-card-blur";
import { DefinitionButton } from "./definition-button";
import type { User } from "../../lib/types/user";
import type { Bot } from "../../lib/types/bot";

type BotTooltipProps = {
  bot: Bot;
  user: User | null;
};

export function BotTooltip({ bot, user }: BotTooltipProps): JSX.Element {
  return (
    <div
      className="hidden xs:block outline-glow absolute invisible group-hover/img:visible
                w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3
                h-96 group-hover:z-50 opacity-0 group-hover/img:opacity-100
                transition-all [transition:visibility_0ms_ease_600ms,opacity_400ms_ease]
                group-hover/img:delay-500 bg-black rounded-md hover:cursor-default"
    >
      <BotCardGlow src={bot.avatar_url} />

      <div className="relative rounded-t-md overflow-hidden duration-1000 h-32 w-full">
        <FavoriteBotButton buttonClassName="z-30" />

        <DefinitionButton
          className="hover:scale-105"
          href={`/character/${bot.id}`}
        />

        <span className="absolute bg-black/50 bottom-0 right-0 z-30 text-xs backdrop-blur-md p-1 rounded-tl-md">
          {formatNumber(bot.token_count, "commas")} tokens
        </span>

        <div
          className="non-selectable w-full h-full
                    transition-all duration-500 group-hover:z-50"
        >
          <NextImage
            imgClassName="pointer-events-none"
            src={
              bot.avatar_url !== "/assets/harley.png"
                ? "https://ndsc.b-cdn.net/" + bot.avatar_url
                : "/assets/harley.png"
            }
            alt="Harley Quinn"
            layout="fill"
            draggable={false}
            useSkeleton
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-row">
          <p className="font-bold w-full text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis">
            {bot.name}
          </p>

          <div className="flex flex-row items-center gap-3 w-full">
            <CustomIcon className="ml-auto w-4" iconName="MessageIcon" />
            <p className="text-xs">
              {formatNumber(bot.num_messages, "shorten")}
            </p>
          </div>
        </div>
        <p className=" h-14 overflow-y-auto text-sm">{bot.title}</p>

        <div className="flex flex-row gap-2 items-center mt-3">
          <div className="group/user">
            <UserTooltip user={user} />
            <Avatar src="/assets/hq2.jpg" width={45} />
          </div>

          <Link
            href="#"
            className="custom-underline w-80 text-white/70 overflow-hidden
                      whitespace-nowrap overflow-ellipsis"
          >
            @{user?.username}
          </Link>
        </div>

        <Link
          className="w-full bg-white hover:bg-white/90
                    active:bg-white/80 subm text-black p-2
                    rounded mt-2.5 text-center"
          href="#"
        >
          Chat
        </Link>
      </div>
    </div>
  );
}
