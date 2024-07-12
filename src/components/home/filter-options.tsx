"use client";

import Link from "next/link";
import { cn } from "../lib/cn";
import { BOT_TAGS } from "../lib/types/tags";
import {
  Dropdown,
  DropdownButton,
  DropdownItems,
  DropdownItem,
} from "../ui/dropdown/dropdown";
import { useSearchParams } from "next/navigation";
import type { DropdownButtonItem } from "../ui/dropdown/dropdown";
import { MultiselectDropdown } from "../ui/dropdown/multiselect-dropdown";

const sortOptions = [
  "trending",
  "top-rated",
  "popular",
  "latest",
  "name",
] as const;

type SortOption = (typeof sortOptions)[number];

type FilterOption = {
  name: string;
  queryValue: SortOption;
};

const options: FilterOption[] = [
  {
    name: "Trending",
    queryValue: "trending",
  },
  {
    name: "Top Rated",
    queryValue: "top-rated",
  },
  {
    name: "Popular",
    queryValue: "popular",
  },
  {
    name: "Latest",
    queryValue: "latest",
  },
  {
    name: "Name",
    queryValue: "name",
  },
];

export function FilterOptions(): JSX.Element {
  const params = useSearchParams();

  const query = params.get("sort-by");

  const isValidQuery = sortOptions.includes(
    query as (typeof sortOptions)[number]
  );

  const handleSelected = (option: FilterOption): boolean => {
    if (!query && option.name === "Trending") return true;

    if (!isValidQuery && option.name === "Trending") return true;

    if (query === option.queryValue) return true;

    return false;
  };

  const tags: DropdownButtonItem[] = BOT_TAGS.map((tag, index) => {
    return {
      label: tag,
    };
  });

  return (
    <div
      className="sticky top-16 xs:flex flex-row gap-3 items-center hidden shadow-lg shadow-black/50
                w-full px-5 z-50 bg-black justify-center pt-5 border-b border-b-dark-border"
    >
      {options.map((option, index) => (
        <Link
          key={index}
          className="relative p-2 border-main-accent group"
          href={`/?sort-by=${option.queryValue}`}
        >
          <span className={cn(handleSelected(option) && "font-bold")}>
            {option.name}
          </span>
          <i
            className={cn(
              "absolute bottom-0 left-0 right-0 opacity-0 bg-main-accent h-0.5 duration-300 transition-opacity",
              handleSelected(option) && "opacity-100",
              !handleSelected(option) &&
                "group-hover:block group-hover:opacity-50"
            )}
          />
        </Link>
      ))}

      <div>
        <MultiselectDropdown label="Tags" items={tags} />
      </div>
    </div>
  );
}
