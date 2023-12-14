import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

type BadgeProps = {
  className?: string;
  children: ReactNode;
};

export function Badge({ className, children }: BadgeProps): JSX.Element {
  return (
    <div
      className={twMerge(
        `flex items-center justify-center self-start h-4 px-4 py-3 bg-[#9750dd] rounded-xl
        text-sm`,
        className
      )}
    >
      {children}
    </div>
  );
}
