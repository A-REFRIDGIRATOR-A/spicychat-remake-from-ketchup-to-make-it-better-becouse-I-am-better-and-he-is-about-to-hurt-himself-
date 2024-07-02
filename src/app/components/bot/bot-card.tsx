import Link from "next/link";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { Avatar } from "../ui/avatar";
import { BotTooltip } from "./bot-tooltip";
import { UserTooltip } from "../ui/user-tooltip";
import { Badge } from "../ui/badge";
import { BotCardContent } from "./bot-card-content";

export type BotCardProps = {
  src: string;
  name: string;
  description: string;
  creator: string;
  messages: number;
  recommended?: boolean;
};

export function BotCard({
  src,
  name,
  description,
  creator,
  messages,
  recommended,
}: BotCardProps): JSX.Element {
  return (
    <div
      className="flex flex-col gap-3 group w-44 xs:w-52 bg-blackcursor-pointer transition-all
                rounded-md duration-300 z-0 xs:hover:z-10 xs:hover:scale-105"
    >
      <BotCardContent
        recommended={recommended}
        src={src}
        botName={name}
        description={description}
        creator={creator}
        messages={messages}
      />

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-row items-center gap-3 w-full">
          <CustomIcon className="w-4" iconName="MessageIcon" />
          <p className="text-xs">{messages}</p>
        </div>

        <p className="block xs:hidden w-full text-ellipsis h-14 overflow-hidden text-sm">
          <span className="line-clamp-3">{description}</span>
        </p>

        <div className="flex flex-row items-center gap-3 w-full">
          <div className="group/user">
            <UserTooltip name="User123" botCount={16} />
            <Avatar src="/assets/hq2.jpg" width={40} />
          </div>
          <p className="font-bold w-44 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {name}
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
