import { cn } from "../lib/cn";
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <div className={cn("relative inline-flex w-full flex-col", className)}>
      <label className="text-sm">{label}</label>
      <div
        className={cn(
          "inline-flex flex-col overflow-hidden rounded transition-all duration-500",
          errorMessage && "w-full ring-1 ring-red-500 focus-within:ring-2",
        )}
      >
        {useTextArea ? (
          <textarea
            id={inputId}
            className={cn(
              "h-40 w-full rounded-md bg-white/20 p-2",
              inputClassName,
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
            className={cn(
              "w-full rounded-md bg-white/20 p-2 outline-none",
              inputClassName,
            )}
            placeholder={placeholder ?? label}
            value={slicedInputValue}
            onChange={!isHittingInputLimit ? handleChange : undefined}
            onKeyUp={handleKeyboardShortcut}
          />
        )}
      </div>
      <div
        className="absolutee -bottom-5 left-0 right-0 mt-1 flex flex-row overflow-hidden
          text-ellipsis"
      >
        {errorMessage && (
          <p className="w-[90%] overflow-hidden text-sm text-red-500 transition-all duration-500">
            <span>{errorMessage}</span>
          </p>
        )}
        {showInputLimit && inputLimit && (
          <span
            className={cn(
              "ml-auto text-right text-xs transition-all duration-500",
              isInputLimit && "text-red-500",
            )}
          >
            {inputLength}/{inputLimit}
          </span>
        )}
      </div>
    </div>
  );
}
