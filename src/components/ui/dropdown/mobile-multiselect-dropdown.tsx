import { cn } from "@/components/lib/cn";
import { InputField } from "@/components/input/input-field";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownItems,
} from "./dropdown";
import type { ChangeEvent } from "react";

type MobileMultiselectDropdownProps = {
  open: boolean;
  items: string[];
  label?: string;
  className?: string;
  inputValue: string;
  itemClassName?: string;
  selectedOptions: string[];
  buttonClassName?: string;
  handleClick: () => void;
  handleItemClick: (label?: string) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export function MobileMultiselectDropdown({
  open,
  items,
  label,
  className,
  inputValue,
  itemClassName,
  selectedOptions,
  buttonClassName,
  handleClick,
  handleItemClick,
  handleChange,
}: MobileMultiselectDropdownProps): JSX.Element {
  return (
    <>
      <div className="relative">
        <Dropdown
          className="static ml-auto block w-16 xs:hidden"
          isOpen={open}
          onClick={handleClick}
        >
          {({ open }): JSX.Element => (
            <>
              <DropdownButton
                className={cn(
                  `ml-auto w-16 rounded-full bg-dark-border/80 px-5 py-1 hover:bg-dark-border/90
                  active:bg-dark-border [&>span]:font-semibold [&_span]:text-sm`,
                  buttonClassName,
                )}
              >
                <span>{label}</span>
              </DropdownButton>

              <DropdownItems
                className={cn(
                  `outline-glow left-0 max-h-[21rem] min-w-full translate-x-0 flex-col items-center
                  overflow-y-auto rounded-none border-b border-t border-white/50 bg-black`,
                  className,
                  !open && "hidden",
                )}
                closeOnItemClick={false}
              >
                <InputField
                  className="flex xs:hidden"
                  inputClassName="bg-inherit border-b border-white/20"
                  placeholder="Search"
                  inputValue={inputValue}
                  handleChange={handleChange}
                />

                {items.map((label, index) => {
                  const isSelected = selectedOptions.includes(label) && "block";

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
      </div>
    </>
  );
}
