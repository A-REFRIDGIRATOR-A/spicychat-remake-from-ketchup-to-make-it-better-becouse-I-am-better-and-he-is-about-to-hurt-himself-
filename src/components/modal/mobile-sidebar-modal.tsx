"use client";

import Link from "next/link";
import { CustomIcon, IconName } from "../ui/custom-icon";

type MobileSidebarModalProps = {
  closeModal: () => void;
};

type NavLink = {
  name: string;
  link: string;
  iconName: IconName;
};

const navLinks: NavLink[] = [
  { name: "Home", link: "/", iconName: "HomeIcon" },
  { name: "Chats", link: "/fake-chat", iconName: "MessageIcon" },
  { name: "Create", link: "/create", iconName: "PlusIcon" },
  { name: "My Chatbots", link: "/my-chatbots", iconName: "CreateIcon" },
  { name: "Help", link: "#", iconName: "SpicyChatLogo" },
];

export function MobileSidebarModal({
  closeModal,
}: MobileSidebarModalProps): JSX.Element {
  return (
    <section className="flex flex-col gap-3 px-4 mt-10">
      {navLinks.map(({ name, link, iconName }) => (
        <Link
          key={name}
          href={link}
          className="flex flex-row gap-3 items-center text-2xl font-semibold outline-none"
          onClick={closeModal}
        >
          <CustomIcon iconName={iconName} />
          {name}
        </Link>
      ))}
    </section>
  );
}
