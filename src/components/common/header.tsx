"use client";

import Link from "next/link";
import { cn } from "../lib/cn";
import { CustomIcon } from "../ui/custom-icon";
import { Avatar } from "../ui/avatar";
import { InputField } from "../input/input-field";
import { useState } from "react";
import { Modal } from "../modal/modal";
import { MobileSidebarModal } from "../modal/mobile-sidebar-modal";
import { useModal } from "../lib/hooks/useModal";
import type { ChangeEvent } from "react";
import type { Variants } from "framer-motion";

type HeaderProps = {
  sticky?: boolean;
  className?: string;
};

const variant: Variants = {
  initial: { x: "-100%", opacity: 0.8 },
  animate: {
    x: -8,
    opacity: 1,
    transition: { type: "spring", duration: 0.8 },
  },
  exit: { x: "-100%", opacity: 0.8, transition: { duration: 0.4 } },
};

export function Header({ sticky, className }: HeaderProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setInputValue(value);

  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <div className="w-full h-6 text-center bg-accent-red font-bold">
        <span>Unofficial Spicychat fanmade remake. (WIP)</span>
      </div>
      <header
        className={cn(
          `relative w-full h-20 hidden xs:flex flex-row gap-5
          items-center justify-center py-5 px-20 bg-black z-50`,
          sticky && "sticky top-0",
          className
        )}
      >
        <Link
          href="/"
          className="hover:scale-110 transition-transform duration-500 absolute left-20"
        >
          <CustomIcon className="w-10 h-10" iconName="SpicyChatLogo" />
        </Link>

        <div className="flex flex-row items-center justify-around gap-3 w-">
          <p>Chats</p>
          <p>Create</p>
          <p>My Chatbots</p>
          <p>Help</p>
        </div>

        <div className="absolute right-20 flex flex-row items-center gap-3">
          <InputField
            className="mt-1.5 xs:hidden xl:flex"
            placeholder="Search"
            inputValue={inputValue}
            handleChange={handleChange}
          />
          <Avatar src="/assets/hq2.jpg" width={50} />
          <CustomIcon className="w-9 h-9" iconName="BellIcon" />
        </div>
      </header>
      <header
        className={cn(
          `w-full h-20 xs:hidden flex flex-row gap-5
          items-center py-5 px-3 sticky top-0 z-50 backdrop-blur-lg`,
          className
        )}
      >
        <button onClick={openModal}>
          <CustomIcon className="w-10 h-10" iconName="Settings" />
        </button>
        <Link href="/">
          <CustomIcon className="w-10 h-10" iconName="SpicyChatLogo" />
        </Link>
        <button className="ml-auto">
          <Avatar src="/assets/hq2.jpg" width={50} />
        </button>

        <Modal
          className="p-0 overflow-hidden"
          modalAnimation={variant}
          modalClassName="pl-2 min-h-screen w-72 bg-black shadow-xl shadow-black"
          open={open}
          closeModal={closeModal}
        >
          <MobileSidebarModal closeModal={closeModal} />
        </Modal>
      </header>
    </>
  );
}
