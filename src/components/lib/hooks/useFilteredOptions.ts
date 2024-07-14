"use client";

import { useMemo } from "react";

export function useFilteredOptions(inputValue: string, options: string[]) {
  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, options]
  );

  return filteredOptions;
}
