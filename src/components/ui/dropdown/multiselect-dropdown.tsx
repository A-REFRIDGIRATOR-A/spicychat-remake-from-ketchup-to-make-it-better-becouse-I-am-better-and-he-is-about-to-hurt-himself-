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
import { MobileMultiselectDropdown } from "./mobile-multiselect-dropdown";
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [deselectedOptions, setDeselectedOptions] = useState<string[]>(items);

  const mergedOptions: string[] = [...selectedOptions, ...deselectedOptions];
  const searchOptions = useFilteredOptions(inputValue, mergedOptions);

  useEffect(() => {
    if (isClickedOutside && !buttonIsHovered) setOpen(false);
  }, [isClickedOutside, buttonIsHovered]);

  const handleClick = (): void => {
    if (hover) return; // Fixes a bug where it clicks the main div when clicking on the *very* edge of an item

    setOpen(!open);
  };

  const handleItemClick = (label?: string): void => {
    if (!label) return;

    const removeOption = (option: string, arr: string[]) => {
      const labelIndex = arr.indexOf(option);

      if (labelIndex === -1) return;

      arr.splice(labelIndex, 1);
    };

    const hasLabel = selectedOptions.includes(label);

    if (!hasLabel) {
      setSelectedOptions([...selectedOptions, label]);

      removeOption(label, deselectedOptions);
      setDeselectedOptions(deselectedOptions);
      return;
    }

    removeOption(label, selectedOptions);

    setSelectedOptions(selectedOptions);
    setDeselectedOptions([label, ...deselectedOptions]);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setInputValue(e.target.value);

  return (
    <>
      <MobileMultiselectDropdown
        className={className}
        itemClassName={itemClassName}
        buttonClassName={buttonClassName}
        label={label}
        items={searchOptions}
        selectedOptions={selectedOptions}
        inputValue={inputValue}
        handleChange={handleChange}
        handleItemClick={handleItemClick}
      />

      <Dropdown className="hidden xs:block" isOpen={open} onClick={handleClick}>
        {({ open }): JSX.Element => (
          <>
            <DropdownButton
              ref={buttonRef}
              className={cn(
                `bg-dark-border/80 rounded-full px-5 py-1 hover:bg-dark-border/90
                [&_span]:text-sm [&>span]:font-semibold active:bg-dark-border`,
                buttonClassName
              )}
            >
              <span>{label}</span>
            </DropdownButton>

            <DropdownItems
              ref={ref}
              className={cn(
                `border flex-col items-center border-white/50 overflow-y-auto
              bg-black min-w-[10rem] max-h-[21rem] outline-glow rounded-lg`,
                className,
                !open && "hidden"
              )}
              closeOnItemClick={false}
            >
              <InputField
                className="flex"
                inputClassName="bg-inherit border-b border-white/20"
                placeholder="Search"
                inputValue={inputValue}
                handleChange={handleChange}
              />

              {searchOptions.map((label, index) => {
                const isSelected = selectedOptions.includes(label) && "block";

                return (
                  <DropdownItem
                    key={index}
                    className={cn(
                      `flex flex-row items-center w-full px-3 py-2 border-b last:border-b-0 border-white/20 group`,
                      itemClassName
                    )}
                    onClick={(e) => {
                      e.stopPropagation();

                      handleItemClick(label);
                    }}
                  >
                    <span
                      className={cn(
                        "transition duration-300 group-hover:translate-x-2 opacity-50 group-hover:opacity-80",
                        isSelected &&
                          "opacity-100 group-hover:opacity-100 group-hover:text-red-500"
                      )}
                    >
                      {label}
                    </span>

                    {/* TODO: Prop for selected indicator? */}
                    <span
                      className={cn(
                        "ml-auto transition duration-300 hidden",
                        isSelected && "block group-hover:text-red-500"
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
