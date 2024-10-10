import { formatMarkdown } from "../lib/utils";
import { CustomIcon } from "../ui/custom-icon";
import { NextImage } from "../ui/next-image";

type ChatBubbleProps = {
  src: string;
  name: string;
  message: string;
};

export function ChatBubble({
  src,
  name,
  message,
}: ChatBubbleProps): JSX.Element {
  return (
    <div className="space-y-3">
      <div className="flex flex-row gap-3">
        <div className="relative h-20 w-20 flex-none overflow-hidden rounded-md">
          <NextImage
            src={src}
            alt={src}
            layout="fill"
            sizes="(max-width: 728px) 20vw, (max-width: 1200px) 10vw, 5vw"
            draggable={false}
          />
        </div>

        <div className="space-y-3">
          <span className="font-bold">{name}</span>

          <article
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(message),
            }}
          />
        </div>
      </div>

      <div className="relative ml-20 flex flex-row gap-x-3 px-3 py-1">
        <div
          className="absolute top-0 h-0.5 w-full bg-black bg-gradient-to-l from-gray-dark from-30%
            to-transparent opacity-50"
        />

        <button
          className="ml-3 p-1 active:opacity-50"
          type="button"
          aria-label="regen"
        >
          <CustomIcon className="h-4 w-4" iconName="PlusIcon" />
        </button>
        <button
          className="p-1 active:opacity-50"
          type="button"
          aria-label="message-options"
        >
          <CustomIcon className="h-4 w-4" iconName="EllipsisIcon" />
        </button>

        <div
          className="absolute bottom-0 h-0.5 w-full bg-black bg-gradient-to-l from-gray-dark from-50%
            to-transparent opacity-50"
        />
      </div>
    </div>
  );
}
