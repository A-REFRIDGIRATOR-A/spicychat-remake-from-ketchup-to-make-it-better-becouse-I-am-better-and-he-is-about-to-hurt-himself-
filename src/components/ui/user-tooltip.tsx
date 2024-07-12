import { NextImage } from "./next-image";
import { Avatar } from "./avatar";
import { isPlural } from "../lib/utils";
import { User } from "../lib/types/user";

type UserTooltipProps = {
  user: User | null;
};

export function UserTooltip({ user }: UserTooltipProps): JSX.Element {
  const { username, botCount } = user ?? {};

  return (
    <div
      className="hidden xl:flex outline-glow absolute invisible group-hover/user:visible
                w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                h-52 group-hover:z-[1000] opacity-0 group-hover/user:opacity-100
                transition-all [transition:visibility_0ms_ease_600ms,opacity_400ms_ease]
                group-hover/user:delay-500 bg-black rounded-md flex-col gap-3"
    >
      <div className="relative w-full h-24 rounded-t-md overflow-hidden">
        <NextImage src="/assets/hq.jpg" alt="user-banner" layout="fill" />
      </div>
      <div className="flex flex-col py-3 px-5">
        <Avatar
          className="-mt-16 ring-8 ring-black mb-5"
          src="/assets/hq2.jpg"
          width={90}
        />

        <div className="flex flex-row">
          <p className="text-white/60">@{username}</p>
          <p className="ml-auto">
            {botCount} {"bot" + isPlural(botCount as number)}
          </p>
        </div>
      </div>
    </div>
  );
}
