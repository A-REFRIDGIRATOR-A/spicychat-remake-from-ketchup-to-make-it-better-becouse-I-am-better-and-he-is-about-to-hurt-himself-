import { cn } from "../lib/cn";
import type { ReactNode } from "react";

type BotsContainerProps = {
  className?: string;
  children?: ReactNode;
};

export function BotsContainer({
  className,
  children,
}: BotsContainerProps): JSX.Element {
  return (
    <div
      className={cn(
        `grid grid-flow-row grid-cols-2 grid-rows-2 items-center
        2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 w-full
        px-6 xs:px-0 mb-10 place-items-center xs:gap-x-0 gap-y-8 gap-x-8 h-full`,
        className
      )}
    >
      {children}
    </div>
  );
}
