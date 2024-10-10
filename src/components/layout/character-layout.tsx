import { cn } from "../lib/cn";
import { getBot } from "@/actions/get-bot";
import { CharacterPageNoData } from "../fallbacks/no-data/character-page-no-data";
import { NextImage } from "../ui/next-image";
import { calculateScore, formatMarkdown, formatNumber } from "../lib/utils";
import { CustomIcon } from "../ui/custom-icon";
import { ScrollTags } from "../ui/scroll-tags";
import { Avatar } from "../ui/avatar";

export async function CharacterLayout({ id }: { id: string }) {
  const { data } = await getBot(id);

  const {
    id: botId,
    avatar_url,
    name,
    rating_score,
    title,
    token_count,
    num_messages,
    num_messages_24h,
    greeting,
    persona,
    tags,
    creator_username,
  } = data ?? {};

  const src =
    avatar_url !== "/assets/harley.png"
      ? (avatar_url as string)
      : "/assets/harley.png";

  function DefinitionSection({
    title,
    definition,
  }: {
    title: string;
    definition: string;
  }): JSX.Element {
    return (
      <div className="relative flex flex-col gap-3 rounded-lg bg-gray-dark">
        <span className="w-full border-b border-b-white/30 py-3 text-center text-xl font-semibold">
          {title}
        </span>

        <article
          className="-mt-3 max-h-96 overflow-y-auto p-5"
          dangerouslySetInnerHTML={{
            __html: formatMarkdown(definition),
          }}
        />
      </div>
    );
  }

  if (!botId) return <CharacterPageNoData id={id} />;

  return (
    <>
      <div className="mb-10 flex flex-col gap-3 xs:hidden">
        <div className="non-selectable relative h-96 w-full">
          <NextImage
            src={src}
            alt={botId as string}
            layout="fill"
            useSkeleton
            sizes="(max-width: 728px) 90vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

          <div
            className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between
              gap-3 p-5"
          >
            <h1 className="mt-auto line-clamp-2 w-52 overflow-hidden text-ellipsis text-3xl font-semibold">
              {name}
            </h1>

            <div className="grid grid-flow-row grid-cols-2 place-items-end">
              <span className="col-span-2 text-4xl font-bold">
                {isNaN(rating_score as number)
                  ? "0%"
                  : calculateScore(rating_score as number)}
              </span>

              <span
                className={cn(
                  "col-span-2 flex items-center gap-2 text-2xl",
                  num_messages_24h && "col-span-1",
                )}
              >
                {formatNumber(num_messages as number, "shorten")}
                <CustomIcon iconName="MessageIcon" />
              </span>

              {num_messages_24h && (
                <span className="ml-2 flex items-center gap-2 border-l-2 border-l-white/30 px-2 text-2xl">
                  {formatNumber(num_messages_24h)}{" "}
                  <CustomIcon iconName="MessageIcon" />
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 px-6">
          <span className="ml-auto self-start rounded-full bg-gray-dark px-3 py-0.5 font-semibold">
            {token_count} tokens
          </span>

          <ScrollTags tags={tags ?? []} />

          <DefinitionSection title="Title" definition={title as string} />

          <DefinitionSection title="Greeting" definition={greeting as string} />

          {persona && (
            <DefinitionSection
              title="Personality"
              definition={persona as string}
            />
          )}
        </div>
      </div>

      <div className="relative hidden h-full w-full flex-col gap-5 overflow-hidden p-10 xs:flex">
        <NextImage
          imgClassName="blur-sm"
          src={src}
          alt={botId}
          layout="fill"
          draggable={false}
        />
        {/* There's probably so many better ways to do this lol */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black from-5% via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black from-5% via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-5% via-transparent" />
        <div className="z-20 flex h-96 w-full flex-row gap-5">
          <div className="relative w-96">
            <NextImage
              imgClassName="rounded-lg"
              src={src}
              alt={botId}
              layout="fill"
              draggable={false}
              priority
            />
          </div>

          <div className="flex h-full flex-col">
            <h1 className="text-7xl font-bold">{name}</h1>

            <div className="mt-auto grid grid-flow-row grid-cols-2 gap-3">
              <span className="col-span-2 text-5xl font-bold">
                {calculateScore(rating_score as number)}
              </span>

              <span className="col-span-2 flex items-center gap-1 text-2xl">
                {formatNumber(num_messages as number, "shorten")}
                <CustomIcon className="h-5 w-5" iconName="MessageIcon" />
              </span>

              <div className="flex items-center gap-2">
                <Avatar src="/assets/hq.jpg" width={40} />
                <span>{creator_username}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 h-96 bg-black/0"></div>
      </div>
    </>
  );
}
