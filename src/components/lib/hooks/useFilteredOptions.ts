"use client";

import { useMemo, useState } from "react";

type UseFilteredOptionsOptions = {
  inputValue?: string;
  defaultItems?: string[];
};

/** Search and handle options. Perfect for multiselect dropdown menus */
export function useFilteredOptions(options?: UseFilteredOptionsOptions) {
  const { inputValue = "", defaultItems = [] } = options ?? {};

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [deselectedOptions, setDeselectedOptions] = useState<string[]>(
    defaultItems ?? [],
  );

  const [excludeOptions, setExcludeOptions] = useState<string[]>([]);

  const searchOptions = useMemo(
    () =>
      [...selectedOptions, ...deselectedOptions]
        .filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase()),
        )
        .filter((option) => !excludeOptions.includes(option)),
    [selectedOptions, deselectedOptions, inputValue, excludeOptions],
  );

  const mergedExcludeOptions = [...excludeOptions, ...searchOptions];

  const removeOption = (option: string, arr: string[]) => {
    const labelIndex = arr.indexOf(option);

    if (labelIndex === -1) return;

    arr.splice(labelIndex, 1);
  };

  const handleItemClick = (label?: string): void => {
    if (!label) return;

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

  const handleExcludeClick = (label?: string): void => {
    if (!label) return;

    const isExcluded = excludeOptions.includes(label);

    if (isExcluded) {
      removeOption(label, excludeOptions);
      // setExcludeOptions([...excludeOptions]);
      // setDeselectedOptions([label, ...deselectedOptions]);

      return;
    }

    setExcludeOptions([label, ...excludeOptions]);
    // removeOption(label, deselectedOptions);
    // setDeselectedOptions([...deselectedOptions]);
  };

  return {
    selectedOptions,
    deselectedOptions,
    searchOptions,
    excludeOptions,
    mergedExcludeOptions,
    handleItemClick,
    handleExcludeClick,
  };
}
