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
      className="outline-glow invisible absolute left-1/2 top-1/2 hidden h-96 w-96
        -translate-x-1/2 -translate-y-1/3 transform rounded-md bg-black opacity-0
        transition-all [transition:visibility_0ms_ease_600ms,opacity_400ms_ease]
        hover:cursor-default group-hover/img:visible group-hover:z-50
        group-hover/img:opacity-100 group-hover/img:delay-500 xs:block"
    >
      <BotCardGlow src={bot.avatar_url} />

      <div className="relative h-32 w-full overflow-hidden rounded-t-md duration-1000">
        <FavoriteBotButton buttonClassName="z-30" />

        <DefinitionButton
          className="hover:scale-105"
          href={`/character/${bot.id}`}
          bot={bot}
        />

        <span
          className="absolute bottom-0 right-0 z-30 rounded-tl-md bg-black/50 p-1 text-xs
            backdrop-blur-md"
        >
          {formatNumber(bot.token_count, "commas")} tokens
        </span>

        <div className="non-selectable h-full w-full transition-all duration-500 group-hover:z-50">
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
          <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl font-bold">
            {bot.name}
          </p>

          <div className="flex w-full flex-row items-center gap-3">
            <CustomIcon className="ml-auto w-4" iconName="MessageIcon" />
            <p className="text-xs">
              {formatNumber(bot.num_messages, "shorten")}
            </p>
          </div>
        </div>
        <p className="h-14 overflow-y-auto text-sm">{bot.title}</p>

        <div className="mt-3 flex flex-row items-center gap-2">
          <div className="group/user">
            <UserTooltip user={user} />
            <Avatar src="/assets/hq2.jpg" width={45} />
          </div>

          <Link
            href="#"
            className="custom-underline w-80 overflow-hidden overflow-ellipsis whitespace-nowrap
              text-white/70"
          >
            @{user?.username}
          </Link>
        </div>

        <Link
          className="subm mt-2.5 w-full rounded bg-white p-2 text-center text-black hover:bg-white/90
            active:bg-white/80"
          href="#"
        >
          Chat
        </Link>
      </div>
    </div>
  );
}
