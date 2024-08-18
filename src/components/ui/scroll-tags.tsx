import { cn } from "../lib/cn";

type ScrollTagsProps = {
  className?: string;
  tagsClassName?: string;
  tags: string[];
};

export function ScrollTags({
  tags,
  className,
  tagsClassName,
}: ScrollTagsProps): JSX.Element {
  return (
    <div className="relative">
      <div
        className={cn(
          "no-scrollbar space-x-1 overflow-y-auto px-5 py-2",
          className,
        )}
      >
        {tags?.map((tag, index) => (
          <span
            key={index}
            className={cn(
              `ml-auto self-start whitespace-nowrap rounded-full bg-gray-dark px-3 py-0.5
              font-semibold text-white/80`,
              tagsClassName,
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 right-[95%] top-0 bg-gradient-to-r from-black
          to-transparent"
      />

      <div
        className="absolute bottom-0 left-[95%] right-0 top-0 bg-gradient-to-l from-black
          to-transparent"
      />
    </div>
  );
}
