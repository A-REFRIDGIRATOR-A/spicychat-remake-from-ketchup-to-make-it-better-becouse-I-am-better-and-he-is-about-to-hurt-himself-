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
  items: string[];
  label?: string;
  className?: string;
  inputValue: string;
  itemClassName?: string;
  selectedOptions: string[];
  buttonClassName?: string;
  handleItemClick: (label?: string) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export function MobileMultiselectDropdown({
  items,
  label,
  className,
  inputValue,
  itemClassName,
  selectedOptions,
  buttonClassName,
  handleItemClick,
  handleChange,
}: MobileMultiselectDropdownProps): JSX.Element {
  return (
    <>
      <InputField
        className="flex xs:hidden"
        inputClassName="bg-inherit border-b border-white/20"
        placeholder="Search"
        inputValue={inputValue}
        handleChange={handleChange}
      />

      <div className="relative">
        <Dropdown className="block xs:hidden ml-auto w-16 static">
          {({ open }): JSX.Element => (
            <>
              <DropdownButton
                className={cn(
                  `bg-dark-border/80 rounded-full px-5 py-1 hover:bg-dark-border/90
                  [&_span]:text-sm [&>span]:font-semibold active:bg-dark-border w-16 ml-auto`,
                  buttonClassName
                )}
              >
                <span>{label}</span>
              </DropdownButton>

              <DropdownItems
                className={cn(
                  `border-t border-b flex-col items-center border-white/50 overflow-y-auto
                bg-black min-w-full max-h-[21rem] outline-glow rounded-none translate-x-0 left-0`,
                  className,
                  !open && "hidden"
                )}
                closeOnItemClick={false}
              >
                {items.map((label, index) => {
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
      </div>
    </>
  );
}
