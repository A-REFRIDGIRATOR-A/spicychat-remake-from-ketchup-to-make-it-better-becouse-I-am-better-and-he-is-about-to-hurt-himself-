"use client";

import { cn } from "../lib/cn";
import { forwardRef } from "react";
import { usePreventScroll } from "../lib/hooks/usePreventScroll";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ModalProps = ComponentPropsWithoutRef<"div"> & {
  allowScroll?: boolean;
  open: boolean;
  closeOnClick?: boolean;
  children: ReactNode;
  modalClassName?: string;
  overlayClassName?: string;
  closeModal: () => void;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      allowScroll,
      open,
      closeOnClick,
      className,
      modalClassName,
      overlayClassName,
      children,
      closeModal,
      ...props
    },
    ref
  ) => {
    usePreventScroll({ isDisabled: allowScroll ?? !open });

    return (
      <div
        className={cn(
          `fixed inset-0 z-[60] transition-all flex justify-center items-center
          data-[open=true]:opacity-100 data-[open=true]:visible data-[open=false]:opacity-0
          data-[open=false]:invisible`,
          className
        )}
        data-open={open}
      >
        <ModalOverlay
          className={overlayClassName}
          closeOnClick={closeOnClick ?? false}
          closeModal={closeModal}
          data-open={open}
        />

        <div
          ref={ref}
          className={cn(
            "w-96 xs:w-96 h-96 rounded-lg bg-black z-[60] data-[open=true]:animate-out data-[open=false]:animate-in",
            modalClassName
          )}
          data-open={open}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

type ModalOverlayProps = ComponentPropsWithoutRef<"div"> & {
  closeOnClick: boolean;
  closeModal: () => void;
};

const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ closeOnClick, className, children, closeModal, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `fixed inset-0 z-[60] transition-all transform-gpu flex bg-black/80
        data-[open=true]:opacity-100 backdrop-blur-sm data-[open=true]:visible
        data-[open=false]:opacity-0 data-[open=false]:invisible
        [transition:visibility_400ms_ease_0ms,opacity_400ms_ease]`,
        className
      )}
      onClick={closeOnClick ? closeModal : undefined}
      {...props}
    >
      {children}
    </div>
  )
);

ModalOverlay.displayName = "ModalOverlay";

export { Modal, ModalOverlay };
