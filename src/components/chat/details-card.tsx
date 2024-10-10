"use client";

import { cn } from "../lib/cn";
import { NextImage } from "../ui/next-image";
import { SectionCard } from "./section-card";
import type { Bot } from "../lib/types/bot";
import type { ReactNode } from "react";

type DetailsCardProps = {
  className?: string;
  bot: Bot;
};

export function DetailsCard({ className, bot }: DetailsCardProps): JSX.Element {
  const src =
    bot.avatar_url !== "/assets/harley.png"
      ? bot.avatar_url
      : "/assets/harley.png";

  function SettingButton({
    label,
    value,
    children,
  }: {
    label: string;
    value: string;
    children?: ReactNode;
  }): JSX.Element {
    return (
      <div className="flex w-full flex-col">
        <button
          type="button"
          className="group flex justify-between p-3 transition-colors duration-150
            hover:bg-neutral-700"
        >
          <div>{label}</div>

          <span
            className="rounded-full bg-neutral-700 px-3 transition-colors duration-150
              group-hover:bg-neutral-800"
          >
            {value}
          </span>
        </button>

        <div>{children}</div>
      </div>
    );
  }

  return (
    <SectionCard className={cn("no-scrollbar hidden md:flex", className)}>
      {({ open }) => (
        <>
          <div className="non-selectable relative h-96 w-full flex-none">
            <NextImage
              imgClassName="rounded-t-md"
              src={src}
              alt={bot.id}
              layout="fill"
              sizes="(max-width: 728px) 50vw, (max-width: 1200px) 30vw, 20vw"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-dark to-transparent" />
          </div>

          <div
            className={cn(
              "flex flex-col gap-3 p-3 transition-all duration-1000",
              !open && "pointer-events-none opacity-0 duration-300",
            )}
          >
            <h1 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-bold">
              {bot.name}
            </h1>

            <p className="line-clamp-3 h-20 w-[22.5rem] text-ellipsis">
              {bot.title}
            </p>

            <span className="text-sm font-medium opacity-50">
              Chat Settings
            </span>
            <div
              className="non-selectable -mt-2 flex w-[22.5rem] flex-col rounded-lg border-white/10
                bg-neutral-800 first:[&>div:first-child>button]:rounded-t-lg
                first:[&>div:last-child>button]:rounded-b-lg
                first:[&>div:last-child>button]:border-none [&>div>button]:border-white/10
                first:[&>div>button]:border-b"
            >
              <SettingButton label="Model" value="WizardLM-2 8x22b" />

              <SettingButton label="Response Max Tokens" value="250" />

              <SettingButton label="Temperature" value="0.7" />
            </div>
          </div>
        </>
      )}
    </SectionCard>
  );
}
