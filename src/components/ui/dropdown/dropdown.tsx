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
  /** Used to override open */
  isOpen?: boolean;
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
  },
);

Dropdown.displayName = "Dropdown";

type DropdownButtonProps = ComponentPropsWithoutRef<"div"> & {};

const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center hover:cursor-pointer",
        className,
      )}
      onClick={() => {}}
      {...props}
    >
      {children}
    </div>
  ),
);

DropdownButton.displayName = "DropdownButton";

type DropdownItemsProps = ComponentPropsWithoutRef<"div"> & {
  closeOnItemClick?: boolean;
};

const DropdownItems = forwardRef<HTMLDivElement, DropdownItemsProps>(
  ({ closeOnItemClick = true, className, children, ...props }, ref) => {
    const handleClick = (
      e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    ) => {
      if (closeOnItemClick) return;

      e.stopPropagation();
    };

    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-1/2 top-0 -translate-x-1/2 translate-y-10",
          className,
        )}
        {...props}
      >
        <div onClick={(e) => handleClick(e)}>{children}</div>
      </div>
    );
  },
);

DropdownItems.displayName = "DropdownItems";

export type DropdownButtonItem = {
  label: string;
  action?: () => void;
  callback?: (arg: any) => void;
};

type DropdownItemProps = ComponentPropsWithoutRef<"button"> & {
  action?: () => void;
};

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, children, action, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("", className)}
      type="button"
      onClick={() => action?.()}
      {...props}
    >
      {children}
    </button>
  ),
);

DropdownItem.displayName = "DropdownItem";

export { Dropdown, DropdownButton, DropdownItems, DropdownItem };
