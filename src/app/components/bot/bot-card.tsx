import Link from "next/link";
import { motion } from "framer-motion";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { Avatar } from "../ui/avatar";
import { BotTooltip } from "./bot-tooltip";
import { UserTooltip } from "../ui/user-tooltip";
import { Badge } from "../ui/badge";

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
    <motion.div
      className="flex flex-col gap-3 group w-44 xs:w-64 bg-black hover:scale-105
                    cursor-pointer transition-all rounded-md duration-300 z-0 hover:z-10"
      whileHover={{
        scale: 1.05, // use your mobile var to ignore hover on mobile
      }}
    >
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
            <button className="flex xs:hidden absolute top-3 left-3 z-50">
              <CustomIcon className="w-8 h-8" iconName="HeartIcon" />
            </button>
            <div
              className="non-selectable w-full h-full xs:group-hover:scale-110
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
          name={name}
          description={description}
          creator={creator}
          messages={messages}
        />
      </div>

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
            <UserTooltip name="User123" botCount={3} />
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
    </motion.div>
  );
}
