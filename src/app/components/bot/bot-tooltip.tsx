import Link from "next/link";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import { Avatar } from "../ui/avatar";
import { BotCardProps } from "./bot-card";
import { UserTooltip } from "../ui/user-tooltip";

export function BotTooltip({
  src,
  name,
  description,
  creator,
  messages,
}: BotCardProps): JSX.Element {
  return (
    <div
      className="hidden xs:block outline-glow absolute invisible group-hover/img:visible
                w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3
                h-96 group-hover:z-[1000] opacity-0 group-hover/img:opacity-100
                transition-all [transition:visibility_0ms_ease_600ms,opacity_400ms_ease]
                group-hover/img:delay-500 bg-black rounded-md"
      style={
        {
          //boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.2)",
        }
      }
    >
      <div className="relative rounded-t-md overflow-hidden duration-1000 h-32 w-full">
        <button>
          <CustomIcon
            className="absolute top-3 left-3 z-50"
            iconName="HeartIcon"
          />
        </button>
        <div
          className="non-selectable w-full h-full
                    transition-all duration-500 group-hover:z-50"
        >
          <NextImage
            imgClassName="pointer-events-none"
            src={src}
            alt="Harley Quinn"
            layout="fill"
            draggable={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent mt-10 hidden" />
      </div>

      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-row">
          <p className="font-bold w-full text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis">
            {name}
          </p>

          <div className="flex flex-row items-center gap-3 w-full">
            <CustomIcon className="ml-auto w-4" iconName="MessageIcon" />
            <p className="text-xs">{messages}</p>
          </div>
        </div>
        <p className=" h-14 overflow-y-auto text-sm">{description}</p>

        <div className="flex flex-row gap-2 items-center mt-3">
          <div className="group/user">
            <UserTooltip name="User123" botCount={3} />
            <Avatar src="/assets/hq2.jpg" width={45} />
          </div>
          <Link
            href="#"
            className="custom-underline w-80 text-white/70 overflow-hidden
                      whitespace-nowrap overflow-ellipsis"
          >
            @{creator}
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
