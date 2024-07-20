"use client";

import Link from "next/link";
import { cn } from "../lib/cn";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";
import type { IconName } from "../ui/custom-icon";

type MobileSidebarModalProps = {
  closeModal: () => void;
};

type NavLink = {
  name: string;
  link: string;
  iconName?: IconName;
};

const navLinks: NavLink[] = [
  { name: "Home", link: "/", iconName: "HomeIcon" },
  { name: "Chats", link: "/fake-chat", iconName: "MessageIcon" },
  { name: "Create", link: "/create", iconName: "PlusIcon" },
  { name: "My Chatbots", link: "/my-chatbots", iconName: "CreateIcon" },
  { name: "Favorites", link: "/favorites", iconName: "HeartIcon" },
  { name: "Recommendations", link: "/recommendations" },
  { name: "Leaderboard", link: "/leaderboard" },
  { name: "Blocked", link: "/blocked" },
  { name: "Help", link: "#", iconName: "SpicyChatLogo" },
];

export function MobileSidebarModal({
  closeModal,
}: MobileSidebarModalProps): JSX.Element {
  return (
    <section className="relative flex flex-col gap-3 px-4 mt-5 h-[calc(100%_-_2.1rem)]">
      <div className="relative h-52 w-full mb-5">
        <NextImage
          imgClassName="z-50 rounded-lg"
          src="/assets/hq.jpg"
          alt="avatar"
          layout="fill"
          useSkeleton
        />

        <NextImage
          imgClassName="absolute inset-0 blur-lg z-10"
          src="/assets/hq.jpg"
          alt="avatar"
          layout="fill"
          quality={50}
          useSkeleton
        />
      </div>

      {navLinks.map(({ name, link, iconName }) => (
        <Link
          key={name}
          className={cn(
            "flex flex-row gap-5 items-center font-semibold outline-none text-xl",
            name === "Help" && "mt-auto"
          )}
          href={link}
          onClick={closeModal}
        >
          {iconName && <CustomIcon iconName={iconName} />}
          {name}
        </Link>
      ))}

      <div className="absolute bottom-0 -right-16 flex flex-col bg-black/10 p-2 items-center gap-3 rounded-lg backdrop-blur-sm">
        <CustomIcon className="w-9 h-9" iconName="DiscordIcon" />

        <CustomIcon className="w-9 h-9" iconName="TwitterIcon" />

        <CustomIcon className="w-9 h-9" iconName="RedditIcon" />
      </div>
    </section>
  );
}
