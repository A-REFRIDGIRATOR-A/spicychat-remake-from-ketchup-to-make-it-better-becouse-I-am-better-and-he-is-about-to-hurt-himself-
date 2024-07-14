"use client";

import { cn } from "../lib/cn";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

type Button = ComponentPropsWithoutRef<"button"> & {
  loading?: boolean;
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, Button>(
  ({ loading, disabled, className, children, ...props }, ref) => {
    const isDisabled = loading || disabled;

    return (
      <button
        ref={ref}
        className={cn(
          "",
          loading && "relative !text-transparent disabled:cursor-wait",
          className
        )}
        type="button"
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
