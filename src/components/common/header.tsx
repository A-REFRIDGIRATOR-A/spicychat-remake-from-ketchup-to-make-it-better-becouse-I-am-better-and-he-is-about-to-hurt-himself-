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

type HeaderProps = {
  disableSticky?: boolean;
  className?: string;
};

export function Header({ disableSticky, className }: HeaderProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setInputValue(value);

  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <div className="h-6 w-full bg-accent-red text-center font-bold">
        <span>Unofficial Spicychat fanmade remake. (WIP)</span>
      </div>

      <header
        className={cn(
          `relative z-50 hidden h-20 w-full flex-row items-center justify-center gap-5
          bg-black px-20 py-5 xs:flex`,
          !disableSticky && "sticky top-0",
          className,
        )}
      >
        <Link
          href="/"
          className="absolute left-20 transition-transform duration-500 hover:scale-110"
          aria-label="spicychat"
        >
          <CustomIcon className="h-10 w-10" iconName="SpicyChatLogo" />
        </Link>

        <div className="w- flex flex-row items-center justify-around gap-3">
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

          <Avatar src="/assets/hq.jpg" width={50} />

          <CustomIcon className="h-9 w-9" iconName="BellIcon" />
        </div>
      </header>

      <header
        className={cn(
          `sticky top-0 z-50 flex h-20 w-full flex-row items-center gap-5 px-3 py-5
          backdrop-blur-lg xs:hidden`,
          className,
        )}
      >
        <button onClick={openModal}>
          <CustomIcon className="h-10 w-10" iconName="Settings" />
        </button>

        <Link href="/" aria-label="spicychat">
          <CustomIcon className="h-10 w-10" iconName="SpicyChatLogo" />
        </Link>

        <button className="ml-auto">
          <Avatar src="/assets/hq.jpg" width={50} />
        </button>
      </header>

      <Modal
        className="data-[open=true]:animate-out data-[open=false]:animate-in h-full w-64
          overflow-visible rounded-none bg-black/20 backdrop-blur-md"
        overlayClassName="bg-black/20 justify-normal"
        open={open}
        closeModal={closeModal}
        closeOnClick
        defaultAnimation={false}
      >
        <MobileSidebarModal closeModal={closeModal} />
      </Modal>
    </>
  );
}
