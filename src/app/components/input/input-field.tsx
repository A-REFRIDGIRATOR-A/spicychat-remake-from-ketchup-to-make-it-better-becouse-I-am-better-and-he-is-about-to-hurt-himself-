import { twMerge } from "tailwind-merge";
import type { ChangeEvent, KeyboardEvent } from "react";

type InputFieldProps = {
  inputId?: string;
  label?: string;
  placeholder?: string;
  inputValue: string | null;
  inputLimit?: number;
  showInputLimit?: boolean;
  useTextArea?: boolean;
  errorMessage?: string;
  className?: string;
  inputClassName?: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleKeyboardShortcut?: ({
    key,
    ctrlKey,
  }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function InputField({
  inputId,
  label,
  placeholder,
  inputValue,
  inputLimit,
  showInputLimit = true,
  useTextArea,
  errorMessage,
  className,
  inputClassName,
  handleChange,
  handleKeyboardShortcut,
}: InputFieldProps): JSX.Element {
  const slicedInputValue = inputValue?.slice(0, inputLimit) ?? "";

  const inputLength = slicedInputValue.length;
  const isHittingInputLimit = inputLimit && inputLength > inputLimit;
  const isInputLimit = inputLimit && inputLength === inputLimit;

  return (
    <div
      className={twMerge("relative inline-flex flex-col self-start", className)}
    >
      <label className="text-sm">{label}</label>
      <div
        className={twMerge(
          "inline-flex flex-col rounded overflow-hidden transition-all duration-500 items-start self-start",
          errorMessage && "ring-1 focus-within:ring-2 ring-red-500"
        )}
      >
        {useTextArea ? (
          <textarea
            id={inputId}
            className={twMerge(
              "w-full h-40 p-2 bg-white/20 rounded-md",
              inputClassName
            )}
            placeholder={placeholder ?? label}
            value={slicedInputValue}
            onChange={!isHittingInputLimit ? handleChange : undefined}
            onKeyUp={handleKeyboardShortcut}
            rows={3}
          />
        ) : (
          <input
            id={inputId}
            className={twMerge(
              "w-full p-2 bg-white/20 rounded-mdd outline-none",
              inputClassName
            )}
            placeholder={placeholder ?? label}
            value={slicedInputValue}
            onChange={!isHittingInputLimit ? handleChange : undefined}
            onKeyUp={handleKeyboardShortcut}
          />
        )}
      </div>
      <div className="flex flex-row overflow-hidden mt-1 text-ellipsis absolutee left-0 right-0 -bottom-5">
        {errorMessage && (
          <p className="transition-all duration-500 text-sm text-red-500 w-[90%] overflow-hidden">
            <span>{errorMessage}</span>
          </p>
        )}
        {showInputLimit && inputLimit && (
          <span
            className={twMerge(
              "transition-all duration-500 text-right text-xs ml-auto",
              isInputLimit && "text-red-500"
            )}
          >
            {inputLength}/{inputLimit}
          </span>
        )}
      </div>
    </div>
  );
}
