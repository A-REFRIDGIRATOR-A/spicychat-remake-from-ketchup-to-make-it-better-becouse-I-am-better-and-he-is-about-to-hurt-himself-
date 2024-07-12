import { cn } from "../lib/cn";
import type { ReactNode } from "react";

type MainLayoutProps = {
  className?: string;
  children: ReactNode;
};

export function MainLayout({
  className,
  children,
}: MainLayoutProps): JSX.Element {
  return (
    <main
      className={cn("flex w-full justify-center gap-0 lg:gap-4", className)}
    >
      {children}
    </main>
  );
}
