"use client";

import { cn } from "../lib/cn";
import { useState } from "react";
import { CustomIcon } from "../ui/custom-icon";
import type { ReactNode } from "react";

type SectionCardProps = {
  className?: string;
  closeButton?: boolean;
  children?:
    | ReactNode
    | ((props: { open: boolean; toggleOpen: () => void }) => ReactNode);
};

export function SectionCard({
  className,
  closeButton = true,
  children,
}: SectionCardProps): JSX.Element {
  const [sectionOpen, setDetailsOpen] = useState(true);

  const handleClick = () => setDetailsOpen(!sectionOpen);

  return (
    <div
      className={cn(
        `relative z-50 flex w-96 flex-none flex-col overflow-y-auto overflow-x-hidden
        transition-all duration-500`,
        !sectionOpen &&
          "w-10 overflow-hidden hover:cursor-pointer xs:hover:-translate-y-3",
        className,
      )}
      onClick={!sectionOpen ? handleClick : undefined}
    >
      {closeButton && (
        <button
          className={cn(
            `absolute right-3 top-3 z-10 rounded-full bg-black/50 p-1 transition-opacity
            duration-500`,
            !sectionOpen && "opacity-0",
          )}
          type="button"
          onClick={sectionOpen ? handleClick : undefined}
          aria-label="close"
        >
          <CustomIcon iconName="XMarkIcon" />
        </button>
      )}

      <>
        {children && typeof children === "function"
          ? children?.({ open: sectionOpen, toggleOpen: handleClick })
          : children}
      </>
    </div>
  );
}
