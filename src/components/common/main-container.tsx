import { cn } from "../lib/cn";
import type { ReactNode } from "react";

type MainContainerProps = {
  className?: string;
  children: ReactNode;
};

export function MainContainer({
  className,
  children,
}: MainContainerProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full max-w-[96rem] flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}
