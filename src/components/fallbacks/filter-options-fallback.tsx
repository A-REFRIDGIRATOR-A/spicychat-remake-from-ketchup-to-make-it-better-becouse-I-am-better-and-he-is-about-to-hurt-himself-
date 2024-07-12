import { cn } from "../lib/cn";

const options = ["Trending", "Top Rated", "Popular", "Latest", "Name"];

export function FilterOptionsFallback(): JSX.Element {
  const isTrending = (option: string): boolean => {
    if (option === "Trending") return true;

    return false;
  };

  return (
    <div
      className="sticky top-16 xs:flex flex-row gap-3 items-center hidden
                w-full px-5 z-50 bg-black justify-center pt-5 border-b border-b-dark-border"
    >
      {options.map((option, index) => (
        <div key={index} className="relative p-2 border-main-accent group">
          <span className={cn(isTrending(option) && "font-bold")}>
            {option}
          </span>
          <i
            className={cn(
              "absolute bottom-0 left-0 right-0 opacity-0 bg-main-accent h-0.5 duration-300 transition-opacity",
              isTrending(option) && "opacity-100",
              !isTrending(option) && "group-hover:block group-hover:opacity-50"
            )}
          />
        </div>
      ))}
    </div>
  );
}
