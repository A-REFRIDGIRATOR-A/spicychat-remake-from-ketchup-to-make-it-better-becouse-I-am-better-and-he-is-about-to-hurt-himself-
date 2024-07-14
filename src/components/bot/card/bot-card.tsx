import { CustomIcon } from "../../ui/custom-icon";
import { Avatar } from "../../ui/avatar";
import { UserTooltip } from "../../ui/user-tooltip";
import { BotCardContent } from "./bot-card-content";
import { formatNumber } from "@/components/lib/utils";
import type { User } from "../../lib/types/user";
import type { Bot } from "@/components/lib/types/bot";

type BotCardProps = {
  bot: Bot;
  recommended?: boolean;
};

export function BotCard({ bot, recommended }: BotCardProps): JSX.Element {
  const dummyUser: User = {
    name: "User123",
    username: "user123",
    botCount: 16,
  };

  return (
    <div
      className="flex flex-col gap-3 group w-44 xs:w-52 bg-black cursor-pointer transition-all
                 duration-300 z-0 xs:hover:z-10 xs:hover:scale-105"
    >
      <BotCardContent bot={bot} user={dummyUser} recommended={recommended} />

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-row items-center gap-3 w-full">
          <CustomIcon className="w-4" iconName="MessageIcon" />
          <p className="text-xs">{formatNumber(bot.num_messages, "shorten")}</p>
        </div>

        <p className="w-full text-ellipsis h-14 xs:h-10 overflow-hidden text-sm">
          <span className="line-clamp-3 xs:line-clamp-2">{bot.title}</span>
        </p>

        <div className="flex flex-row items-center gap-3 w-full">
          <div className="group/user">
            <UserTooltip user={dummyUser} />
            <Avatar src="/assets/hq2.jpg" width={40} />
          </div>

          <p className="font-bold w-44 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {bot.name}
          </p>

          <button className="ml-auto">
            <CustomIcon
              className="w-8 h-8 xs:w-6 xs:h-6 hover:text-white/70 active:text-white/50"
              iconName="EllipsisIcon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
