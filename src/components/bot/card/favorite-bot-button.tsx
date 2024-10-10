"use client";

import { cn } from "@/components/lib/cn";
import { dummyAction } from "@/actions/dummy-action";
import { Button } from "@/components/ui/button";
import { CustomIcon } from "@/components/ui/custom-icon";
import { preventBubbling } from "@/components/lib/utils";

type FavoriteBotButtonProps = {
  className?: string;
  buttonClassName?: string;
};

export function FavoriteBotButton({
  className,
  buttonClassName,
}: FavoriteBotButtonProps): JSX.Element {
  const handleCick = async () => {
    const data = await dummyAction();

    console.log(data);
  };

  return (
    <Button
      className={cn(
        `absolute left-3 top-3 rounded-full bg-black/30 p-2 backdrop-blur-md
        transition-transform active:scale-95 xs:hover:scale-105`,
        buttonClassName,
      )}
      type="button"
      onClick={preventBubbling(handleCick)}
    >
      <CustomIcon className={cn("", className)} iconName="HeartIcon" />
    </Button>
  );
}
