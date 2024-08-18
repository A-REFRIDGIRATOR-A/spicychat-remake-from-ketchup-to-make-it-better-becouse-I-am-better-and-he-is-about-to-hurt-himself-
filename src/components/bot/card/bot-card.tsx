import { CustomIcon } from "../../ui/custom-icon";
import { BotCardContent } from "./bot-card-content";
import { formatNumber } from "@/components/lib/utils";
import type { Bot } from "@/components/lib/types/bot";

type BotCardProps = {
  bot: Bot;
  recommended?: boolean;
};

export function BotCard({ bot, recommended }: BotCardProps): JSX.Element {
  return (
    <div
      className="group z-0 flex w-44 cursor-pointer flex-col gap-3 bg-black transition-all
        duration-300 xs:w-52 xs:hover:z-10 xs:hover:scale-105"
    >
      <BotCardContent bot={bot} recommended={recommended} />

      <div className="flex w-full flex-col items-center gap-3">
        <div className="flex w-full flex-row items-center gap-3">
          <CustomIcon className="w-4" iconName="MessageIcon" />
          <p className="text-xs">{formatNumber(bot.num_messages, "shorten")}</p>
        </div>

        <p className="h-14 w-full overflow-hidden text-ellipsis text-sm xs:h-10">
          <span className="line-clamp-3 xs:line-clamp-2">{bot.title}</span>
        </p>

        <div className="flex w-full flex-row items-center gap-3">
          <span className="w-44 overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
            {bot.name}
          </span>

          <button className="ml-auto">
            <CustomIcon
              className="h-8 w-8 hover:text-white/70 active:text-white/50 xs:h-6 xs:w-6"
              iconName="EllipsisIcon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
