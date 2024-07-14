"use client";

import { cn } from "@/components/lib/cn";
import { CustomIcon } from "@/components/ui/custom-icon";
import { useRouter } from "next/navigation";

type DefinitionButtonProps = {
  className?: string;
  iconClassName?: string;
  href: string;
  hideButton?: boolean;
  disable?: boolean;
};

export function DefinitionButton({
  className,
  iconClassName,
  href,
  hideButton,
  disable,
}: DefinitionButtonProps): JSX.Element {
  const { push } = useRouter();

  const handleClick = () => push(href);

  return (
    <button
      className={cn(
        `absolute top-1 right-1 bg-black/30 rounded-full p-2 backdrop-blur-md z-30
        active:scale-95 transition-transform`,
        className,
        hideButton && "hidden"
      )}
      onClick={handleClick}
      disabled={disable}
    >
      <CustomIcon
        className={cn("w-6 h-6", iconClassName)}
        iconName="InformationIcon"
      />
    </button>
  );
}
