import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { CustomIcon } from "../ui/custom-icon";
import { Avatar } from "../ui/avatar";
import { InputField } from "../input/input-field";
import { useState } from "react";
import type { ChangeEvent } from "react";

type HeaderProps = {
  sticky?: boolean;
  className?: string;
};

export function Header({ sticky, className }: HeaderProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    setInputValue(value);

  return (
    <>
      <div className="w-full h-6 text-center bg-red-700 font-bold">
        <span>This is how I would desgin the site. (WIP)</span>
      </div>
      <header
        className={twMerge(
          `relative w-full h-20 border-b hidden xs:flex flex-row gap-5
          items-center justify-center py-5 px-20`,
          sticky && "sticky",
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
            className="mt-1.5"
            placeholder="Search"
            inputValue={inputValue}
            handleChange={handleChange}
          />
          <Avatar src="/assets/hq2.jpg" width={50} />
          <CustomIcon className="w-9 h-9" iconName="BellIcon" />
        </div>
      </header>
    </>
  );
}
