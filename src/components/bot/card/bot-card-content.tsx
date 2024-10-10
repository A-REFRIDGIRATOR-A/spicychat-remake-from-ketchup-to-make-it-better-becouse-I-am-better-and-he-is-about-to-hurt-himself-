import Link from "next/link";
import { cn } from "@/components/lib/cn";
import { Badge } from "@/components/ui/badge";
import { NextImage } from "@/components/ui/next-image";
import { FavoriteBotButton } from "./favorite-bot-button";
import { DefinitionButton } from "./definition-button";
import type { Bot } from "@/components/lib/types/bot";

type BotCardContentProps = {
  recommended?: boolean;
  bot: Bot;
};

export function BotCardContent({
  recommended,
  bot,
}: BotCardContentProps): JSX.Element {
  return (
    <div className="group/img relative">
      <Link href={`/fake-chat/${bot.id}`}>
        {recommended && (
          <Badge
            className="absolute -top-3 left-9 right-9 z-10 text-xs font-bold shadow-lg shadow-black/40
              xs:text-sm"
          >
            Recommended
          </Badge>
        )}

        <div className="relative h-40 overflow-hidden rounded-md duration-1000 xs:h-52">
          <FavoriteBotButton
            buttonClassName="z-10 top-1 left-1"
            className="h-6 w-6"
          />

          <DefinitionButton
            iconClassName={cn(bot.definition_visible && "text-accent-purple")}
            bot={bot}
          />

          <div className="non-selectable h-full w-full transition-all duration-500">
            <NextImage
              imgClassName="pointer-events-none"
              blurClassName="rounded-md animate-pulse bg-[#71767B]"
              src={
                bot.avatar_url !== "/assets/harley.png"
                  ? bot.avatar_url
                  : "/assets/harley.png"
              }
              alt={bot.id}
              layout="fill"
              draggable={false}
              useSkeleton
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 10vw"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
