"use client";

import { InputField } from "../input/input-field";
import { cn } from "../lib/cn";
import { useFilteredOptions } from "../lib/hooks/useFilteredOptions";
import { useModal } from "../lib/hooks/useModal";
import { Modal } from "./modal";
import { useEffect, useState } from "react";
import { CustomIcon } from "../ui/custom-icon";
import { BOT_TAGS } from "../lib/types/tags";
import type { ChangeEvent, ReactNode } from "react";

type TagsModalProps = {
  className?: string;
  children?: ReactNode;
};

export function TagsModal({
  className,
  children,
}: TagsModalProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");

  const tags: string[] = BOT_TAGS.map((tag) => tag);

  const {
    searchOptions,
    selectedOptions,
    deselectedOptions,
    excludeOptions,
    mergedExcludeOptions,
    handleItemClick,
    handleExcludeClick,
  } = useFilteredOptions({
    inputValue,
    defaultItems: tags,
  });

  const [exclude, setExclude] = useState(false);

  // const {
  //   searchOptions: searchExcludeOptions,
  //   selectedOptions: selectedExcludeOptions,
  //   handleItemClick: handleExcludeClick,
  // } = useFilteredOptions({
  //   inputValue,
  //   defaultItems: tags,
  // });

  const { open, safeOpen, openModal, closeModal } = useModal({ timer: 90 });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setInputValue(e.target.value);

  const handleClick = (option: string) => {
    if (exclude) {
      handleExcludeClick(option);
      return;
    }

    handleItemClick(option);
  };

  useEffect(() => {
    if (exclude && !open) setExclude(false);
  }, [exclude, open]);

  return (
    <>
      <button
        className={cn(
          `rounded-full bg-dark-border/80 px-5 py-1 text-sm font-semibold
          hover:cursor-pointer hover:bg-dark-border/90 active:bg-dark-border`,
          className,
        )}
        onClick={openModal}
      >
        {children ? <>{children}</> : "Tags"}
      </button>

      <Modal
        className="mt-auto w-full rounded-b-none rounded-t-2xl bg-gray-dark/50 p-5 opacity-100
          backdrop-blur-3xl transition-transform duration-300
          data-[open=false]:translate-y-96 data-[open=true]:duration-500"
        overlayClassName="backdrop-blur-none opacity-100"
        open={safeOpen}
        closeModal={closeModal}
        defaultAnimation={false}
        closeOnClick
      >
        {open && (
          <section className="overflow-hidden py-2">
            <button
              className="absolute right-3 top-3 z-50"
              onClick={closeModal}
              aria-label="close-tags-modal"
            >
              <CustomIcon iconName="XMarkIcon" />
            </button>

            <button
              className={cn(
                "rounded-md bg-white/50 p-1 px-3",
                exclude && "text-accent-red",
              )}
              onClick={() => setExclude(!exclude)}
            >
              exclude
            </button>

            <InputField
              inputValue={inputValue}
              handleChange={handleChange}
              placeholder="Search for tags"
            />

            <div className="relative mt-5 h-56 flex-col gap-3 overflow-y-auto">
              {!exclude &&
                searchOptions.map((option, index) => {
                  const isSelected = selectedOptions.includes(option);

                  return (
                    <button
                      key={index}
                      className={cn(
                        "flex w-full flex-row gap-3 text-white/50",
                        isSelected && "font-semibold text-white",
                      )}
                      onClick={() => handleClick(option)}
                    >
                      {option}{" "}
                      {isSelected && (
                        <CustomIcon
                          className="h-4 w-4"
                          iconName="CheckMarkIcon"
                        />
                      )}
                    </button>
                  );
                })}

              {exclude &&
                mergedExcludeOptions.map((option, index) => {
                  const isSelected = excludeOptions.includes(option);

                  return (
                    <button
                      key={index}
                      className={cn(
                        "flex w-full flex-row gap-3 text-white/50",
                        isSelected && "font-semibold text-white",
                      )}
                      onClick={() => handleClick(option)}
                    >
                      {option}{" "}
                      {isSelected && (
                        <CustomIcon
                          className="h-4 w-4"
                          iconName="CheckMarkIcon"
                        />
                      )}
                    </button>
                  );
                })}
            </div>
          </section>
        )}
      </Modal>
    </>
  );
}
