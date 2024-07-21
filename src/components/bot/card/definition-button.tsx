"use client";

import dynamic from "next/dynamic";
import { cn } from "@/components/lib/cn";
import { useModal } from "@/components/lib/hooks/useModal";
import { preventBubbling } from "@/components/lib/utils";
import { Modal } from "@/components/modal/modal";
import { CustomIcon } from "@/components/ui/custom-icon";
import { DefinitionModalFallback } from "@/components/fallbacks/modal/definition-fallback";
import type { Bot } from "@/components/lib/types/bot";

const DefinitionModal = dynamic(
  () =>
    import("@/components/modal/definition-modal").then(
      (mod) => mod.DefinitionModal,
    ),
  {
    loading: () => <DefinitionModalFallback />,
  },
);

type DefinitionButtonProps = {
  bot: Bot;
  className?: string;
  iconClassName?: string;
  hideButton?: boolean;
  disable?: boolean;
};

export function DefinitionButton({
  bot,
  className,
  iconClassName,
  hideButton,
  disable,
}: DefinitionButtonProps): JSX.Element {
  const { open, safeOpen, openModal, closeModal } = useModal({ timer: 90 });

  return (
    <>
      <Modal
        className="overflow-visible xs:w-[30rem]"
        overlayClassName="bg-black/50"
        open={safeOpen}
        closeModal={closeModal}
        closeOnClick
      >
        {open && <DefinitionModal bot={bot} closeModal={closeModal} />}
      </Modal>

      <button
        className={cn(
          `absolute right-1 top-1 z-30 rounded-full bg-black/30 p-2 backdrop-blur-md
          transition-transform active:scale-95`,
          className,
          hideButton && "hidden",
        )}
        onClick={preventBubbling(openModal)}
        disabled={disable}
        aria-label="bot-definition"
      >
        <CustomIcon
          className={cn("h-6 w-6", iconClassName)}
          iconName="InformationIcon"
        />
      </button>
    </>
  );
}
