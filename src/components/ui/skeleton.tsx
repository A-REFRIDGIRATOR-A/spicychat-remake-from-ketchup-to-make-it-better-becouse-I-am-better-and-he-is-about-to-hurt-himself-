import cn from "clsx";
import type { ReactNode } from "react";

type SkeletonProps = {
  className?: string;
  children?: ReactNode;
};

export function Skeleton({ className, children }: SkeletonProps): JSX.Element {
  return (
    <div
      className={cn(
        "animate-pulse bg-neutral-500",
        className ?? "w-20 h-20 rounded-full"
      )}
    >
      {children}
    </div>
  );
}
