type FilterOption = {
  name: string;
  link: string;
};

const options: FilterOption[] = [
  {
    name: "Trending",
    link: "/#",
  },
  {
    name: "Popular",
    link: "/#",
  },
  {
    name: "New",
    link: "/#",
  },
];

export function FilterOptions(): JSX.Element {
  return (
    <div
      className="sticky xs:top-[4.3rem] xs:flex flex-row gap-3 items-center
                      w-full px-5 z-50 bg-black justify-center py-5 border-b border-b-dark-border hidden"
    >
      {options.map((option, index) => (
        <button key={index} className="p-2 bg-sky-800 rounded-md">
          {option.name}
        </button>
      ))}
    </div>
  );
}
