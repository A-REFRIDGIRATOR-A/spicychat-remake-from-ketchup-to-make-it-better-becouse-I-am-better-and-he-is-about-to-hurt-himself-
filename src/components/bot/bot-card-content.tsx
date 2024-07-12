"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { BotTooltip } from "./bot-tooltip";
import type { User } from "../lib/types/user";

type BotCardContentProps = {
  recommended?: boolean;
  src: string;
  botName: string;
  description: string;
  messages: number;
  user: User | null;
};

export function BotCardContent({
  recommended,
  src,
  botName,
  description,
  messages,
  user,
}: BotCardContentProps): JSX.Element {
  return (
    <div className="relative group/img">
      <Link href="#">
        {recommended && (
          <Badge
            className="absolute -top-3 left-9 right-9 z-10 xs:text-sm
                        shadow-lg shadow-black/40 font-bold text-xs"
          >
            Recommended
          </Badge>
        )}
        <div className="peer relative rounded-md overflow-hidden duration-1000 h-40 xs:h-52">
          <button
            className="flex xs:hidden absolute top-3 left-3 z-50"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <CustomIcon className="w-8 h-8" iconName="HeartIcon" />
          </button>
          <div
            className="non-selectable w-full h-full xs:group-hover:scale-105
                      transition-all duration-500"
          >
            <NextImage
              imgClassName="pointer-events-none"
              src={src}
              alt="Harley Quinn"
              layout="fill"
              draggable={false}
            />
          </div>
        </div>
      </Link>

      <BotTooltip
        src={src}
        name={botName}
        description={description}
        messages={messages}
        user={user}
      />
    </div>
  );
}
