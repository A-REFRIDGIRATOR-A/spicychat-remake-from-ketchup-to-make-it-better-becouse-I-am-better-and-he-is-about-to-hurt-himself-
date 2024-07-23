"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "../lib/cn";
import { BOT_TAGS } from "../lib/types/tags";
import { useSearchParams } from "next/navigation";
import { HomeFAB } from "./home-fab";
import { TagsModal } from "../modal/tags-modal";
import { useFilteredOptions } from "../lib/hooks/useFilteredOptions";

const MultiselectDropdown = dynamic(
  () =>
    import("../ui/dropdown/multiselect-dropdown").then(
      (mod) => mod.MultiselectDropdown,
    ),
  {
    loading: () => (
      <span
        className="ml-3 rounded-full bg-dark-border/80 px-5 py-1 text-sm font-semibold
          hover:cursor-pointer hover:bg-dark-border/90 active:bg-dark-border"
      >
        Tags
      </span>
    ),
  },
);

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

  const {} = useFilteredOptions();

  const query = params.get("sort-by");

  const isValidQuery = sortOptions.includes(
    query as (typeof sortOptions)[number],
  );

  const handleSelected = (option: FilterOption): boolean => {
    if (!query && option.name === "Trending") return true;

    if (!isValidQuery && option.name === "Trending") return true;

    if (query === option.queryValue) return true;

    return false;
  };

  const tags: string[] = BOT_TAGS.map((tag) => tag);

  return (
    <>
      <div
        className="sticky top-16 z-20 hidden w-full flex-row items-center justify-center gap-3
          border-b border-b-dark-border bg-black px-5 pt-5 shadow-lg shadow-black/50
          xs:flex"
      >
        {options.map((option, index) => (
          <Link
            key={index}
            className="group relative border-main-accent p-2"
            href={`/?sort-by=${option.queryValue}`}
          >
            <span className={cn(handleSelected(option) && "font-bold")}>
              {option.name}
            </span>
            <i
              className={cn(
                `absolute bottom-0 left-0 right-0 h-0.5 bg-main-accent opacity-0
                transition-opacity duration-300`,
                handleSelected(option) && "opacity-100",
                !handleSelected(option) &&
                  "group-hover:block group-hover:opacity-50",
              )}
            />
          </Link>
        ))}

        <MultiselectDropdown label="Tags" items={tags} />
      </div>

      <div className="mt-5 flex w-full px-5 xs:hidden">
        <TagsModal className="ml-auto" />

        <HomeFAB />
      </div>
    </>
  );
}
