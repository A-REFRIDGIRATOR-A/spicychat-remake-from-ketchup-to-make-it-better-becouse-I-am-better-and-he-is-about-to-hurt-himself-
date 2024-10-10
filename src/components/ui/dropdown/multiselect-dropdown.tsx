"use client";

import { cn } from "../../lib/cn";
import { useHover } from "../../lib/hooks/useHover";
import { useEffect, useState } from "react";
import { useClickOutside } from "../../lib/hooks/useClickOutside";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownItems,
} from "./dropdown";
import { InputField } from "@/components/input/input-field";
import { useFilteredOptions } from "@/components/lib/hooks/useFilteredOptions";
import type { ChangeEvent } from "react";

type MultiselectDropdownProps = {
  items: string[];
  label?: string;
  className?: string;
  itemClassName?: string;
  buttonClassName?: string;
};

export function MultiselectDropdown({
  items,
  label,
  className,
  itemClassName,
  buttonClassName,
}: MultiselectDropdownProps): JSX.Element {
  const { ref: buttonRef, isHovered: buttonIsHovered } =
    useHover<HTMLDivElement>();
  const { ref, isHovered: hover } = useHover<HTMLDivElement>();
  const { isClickedOutside } = useClickOutside(ref);

  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const { searchOptions, selectedOptions, handleItemClick } =
    useFilteredOptions({ inputValue, defaultItems: items });

  useEffect(() => {
    if (isClickedOutside && !buttonIsHovered) setOpen(false);
  }, [isClickedOutside, buttonIsHovered]);

  const handleClick = (): void => {
    if (hover) return; // Fixes a bug where it clicks the main div when clicking on the *very* edge of an item

    setOpen(!open);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setInputValue(e.target.value);

  return (
    <>
      {/* <MobileMultiselectDropdown
        open={open}
        className={className}
        itemClassName={itemClassName}
        buttonClassName={buttonClassName}
        label={label}
        items={searchOptions}
        selectedOptions={selectedOptions}
        inputValue={inputValue}
        handleClick={handleClick}
        handleChange={handleChange}
        handleItemClick={handleItemClick}
      /> */}

      <Dropdown className="hidden xs:block" isOpen={open} onClick={handleClick}>
        {({ open }): JSX.Element => (
          <>
            <DropdownButton
              ref={buttonRef}
              className={cn(
                `rounded-full bg-dark-border/80 px-5 py-1 hover:bg-dark-border/90
                active:bg-dark-border [&>span]:font-semibold [&_span]:text-sm`,
                buttonClassName,
              )}
            >
              <span>{label}</span>
            </DropdownButton>

            <DropdownItems
              ref={ref}
              className={cn(
                `outline-glow max-h-[21rem] min-w-[10rem] flex-col items-center overflow-y-auto
                rounded-lg border border-white/50 bg-black`,
                className,
                !open && "hidden",
              )}
              closeOnItemClick={false}
            >
              <InputField
                inputId={`search-dropdown-${label}`}
                className="flex"
                inputClassName="bg-inherit border-b border-white/20"
                placeholder="Search"
                inputValue={inputValue}
                handleChange={handleChange}
              />

              {searchOptions.map((label, index) => {
                const isSelected = selectedOptions.includes(label);

                return (
                  <DropdownItem
                    key={index}
                    className={cn(
                      `group flex w-full flex-row items-center border-b border-white/20 px-3 py-2
                      last:border-b-0`,
                      itemClassName,
                    )}
                    onClick={(e) => {
                      e.stopPropagation();

                      handleItemClick(label);
                    }}
                  >
                    <span
                      className={cn(
                        `opacity-50 transition duration-300 group-hover:translate-x-2
                        group-hover:opacity-80`,
                        isSelected &&
                          "opacity-100 group-hover:text-red-500 group-hover:opacity-100",
                      )}
                    >
                      {label}
                    </span>

                    {/* TODO: Prop for selected indicator? */}
                    <span
                      className={cn(
                        "ml-auto hidden transition duration-300",
                        isSelected && "block group-hover:text-red-500",
                      )}
                    >
                      *
                    </span>
                  </DropdownItem>
                );
              })}
            </DropdownItems>
          </>
        )}
      </Dropdown>
    </>
  );
}
