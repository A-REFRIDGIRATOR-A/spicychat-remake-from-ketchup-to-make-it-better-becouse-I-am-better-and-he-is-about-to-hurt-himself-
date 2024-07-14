import Link from "next/link";
import { cn } from "@/components/lib/cn";
import { Badge } from "@/components/ui/badge";
import { NextImage } from "@/components/ui/next-image";
import { FavoriteBotButton } from "./favorite-bot-button";
import { BotTooltip } from "./bot-tooltip";
import { DefinitionButton } from "./definition-button";
import type { User } from "@/components/lib/types/user";
import type { Bot } from "@/components/lib/types/bot";

type BotCardContentProps = {
  recommended?: boolean;
  bot: Bot;
  user: User | null;
};

export function BotCardContent({
  recommended,
  bot,
  user,
}: BotCardContentProps): JSX.Element {
  return (
    <div className="relative group/img">
      <Link href="#">
        {recommended && (
          <Badge
            className="absolute -top-3 left-9 right-9 z-10 xs:text-sm
                        shadow-lg shadow-black/40 font-bold text-xs"
          >
            Recommended
          </Badge>
        )}
        <div className="relative rounded-md overflow-hidden duration-1000 h-40 xs:h-52">
          <FavoriteBotButton
            buttonClassName="flex xs:hidden z-10 top-1 left-1"
            className="w-6 h-6"
          />

          <DefinitionButton
            className="xs:hidden block"
            iconClassName={cn(bot.definition_visible && "text-accent-purple")}
            href={`/character/${bot.id}`}
          />

          <DefinitionButton
            className="hidden xs:block"
            href={`/character/${bot.id}`}
            hideButton={!bot.definition_visible}
            disable
          />

          <div
            className="non-selectable w-full h-full xs:group-hover:scale-105
                      transition-all duration-500"
          >
            <NextImage
              imgClassName="pointer-events-none"
              src={
                bot.avatar_url !== "/assets/harley.png"
                  ? "https://ndsc.b-cdn.net/" + bot.avatar_url
                  : "/assets/harley.png"
              }
              alt={bot.id}
              layout="fill"
              draggable={false}
              useSkeleton
            />
          </div>
        </div>
      </Link>

      <BotTooltip bot={bot} user={user} />
    </div>
  );
}
