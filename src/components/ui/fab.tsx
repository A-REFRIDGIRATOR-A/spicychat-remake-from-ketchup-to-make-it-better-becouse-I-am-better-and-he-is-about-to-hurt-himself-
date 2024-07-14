"use client";

import { cn } from "../lib/cn";
import { Button } from "./button";
import type { ReactNode } from "react";

type FABProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function FAB({ className, children, onClick }: FABProps): JSX.Element {
  return (
    <Button
      className={cn(
        `fixed bottom-10 right-10 z-30 p-3 bg-accent-blue rounded-full
        shadow-lg shadow-black/50 active:bg-accent-blue/80 transition-transform
        active:scale-95`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
