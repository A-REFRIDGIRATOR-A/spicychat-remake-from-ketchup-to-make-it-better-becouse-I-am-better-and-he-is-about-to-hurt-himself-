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
    <section className="relative mt-5 flex h-[calc(100%_-_2.1rem)] flex-col gap-3 px-4">
      <div className="relative mb-5 h-52 w-full">
        <NextImage
          imgClassName="z-50 rounded-lg"
          src="/assets/hq.jpg"
          alt="avatar"
          layout="fill"
          useSkeleton
          sizes="(max-width: 728px) 30vw"
        />

        <NextImage
          imgClassName="absolute inset-0 blur-lg z-10"
          src="/assets/hq.jpg"
          alt="avatar"
          layout="fill"
          quality={50}
          useSkeleton
          sizes="(max-width: 728px) 30vw"
        />
      </div>

      {navLinks.map(({ name, link, iconName }) => (
        <Link
          key={name}
          className={cn(
            "flex flex-row items-center gap-5 text-xl font-semibold outline-none",
            name === "Help" && "mt-auto",
          )}
          href={link}
          onClick={closeModal}
        >
          {iconName && <CustomIcon iconName={iconName} />}
          {name}
        </Link>
      ))}

      <div
        className="absolute -right-16 bottom-0 flex flex-col items-center gap-3 rounded-lg
          bg-black/10 p-2 backdrop-blur-sm"
      >
        <CustomIcon className="h-9 w-9" iconName="DiscordIcon" />

        <CustomIcon className="h-9 w-9" iconName="TwitterIcon" />

        <CustomIcon className="h-9 w-9" iconName="RedditIcon" />
      </div>
    </section>
  );
}
