"use client";

import { cn } from "../../lib/cn";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import type { MouseEvent, ReactNode } from "react";

type DropdownProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  isOpen?: boolean; // Used to override open
  children?: (props: { open: boolean }) => ReactNode;
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ isOpen, className, children, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (isOpen === null || isOpen === undefined) return;

      setOpen(isOpen);
    }, [isOpen]);

    return (
      <div
        ref={ref}
        className={cn("non-selectable relative", className)}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children?.({ open })}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

type DropdownButtonProps = ComponentPropsWithoutRef<"div"> & {
  action?: () => void;
};

const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  ({ className, children, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("hover:cursor-pointer", className)}
      onClick={() => {
        action?.();
      }}
      {...props}
    >
      {children}
    </div>
  )
);

DropdownButton.displayName = "DropdownButton";

type DropdownItemsProps = ComponentPropsWithoutRef<"div"> & {
  closeOnItemClick?: boolean;
};

const DropdownItems = forwardRef<HTMLDivElement, DropdownItemsProps>(
  ({ closeOnItemClick = true, className, children, ...props }, ref) => {
    const handleClick = (
      e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
      if (closeOnItemClick) return;

      e.stopPropagation();
    };

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 translate-y-10",
          className
        )}
        {...props}
      >
        <div onClick={(e) => handleClick(e)}>{children}</div>
      </div>
    );
  }
);

DropdownItems.displayName = "DropdownItems";

export type DropdownButtonItem = {
  label: string;
  action?: () => void;
  callback?: (arg: any) => void;
};

type DropdownItemProps = ComponentPropsWithoutRef<"button"> & {};

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, children, ...props }, ref) => (
    <button ref={ref} className={cn("", className)} {...props}>
      {children}
    </button>
  )
);

DropdownItem.displayName = "DropdownItem";

export { Dropdown, DropdownButton, DropdownItems, DropdownItem };
