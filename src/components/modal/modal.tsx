"use client";

import { cn } from "../lib/cn";
import { forwardRef, useEffect, useRef, useState } from "react";
import { usePreventScroll } from "../lib/hooks/usePreventScroll";
import { createPortal } from "react-dom";
import { preventBubbling } from "../lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ModalPortalProps = ComponentPropsWithoutRef<"div"> & {};

const ModalPortal = forwardRef<HTMLDivElement, ModalPortalProps>(
  ({ children, ...props }, ref) => {
    const element = useRef<HTMLElement | null>(null);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      if (typeof document === "undefined") return;

      element.current = document.createElement("div");

      document.body.appendChild(element.current);

      setMounted(true);

      return () => {
        if (element.current && document.body.contains(element.current)) {
          document.body.removeChild(element.current);
        }
      };
    }, []);

    if (!mounted || !element.current) {
      return null;
    }

    return createPortal(
      <div ref={ref} {...props}>
        {children}
      </div>,
      element.current,
    );
  },
);

ModalPortal.displayName = "ModalPortal";

type ModalProps = ComponentPropsWithoutRef<"div"> & {
  allowScroll?: boolean;
  open: boolean;
  closeOnClick?: boolean;
  overlayClassName?: string;
  defaultAnimation?: boolean; // Hate this
  children: ReactNode;
  closeModal: () => void;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      allowScroll,
      open,
      closeOnClick,
      className,
      overlayClassName,
      defaultAnimation = true,
      children,
      closeModal,
      ...props
    },
    ref,
  ) => {
    usePreventScroll({ isDisabled: allowScroll ?? !open });

    return (
      <ModalPortal>
        <ModalOverlay
          className={cn("", overlayClassName)}
          closeModal={closeModal}
          closeOnClick={closeOnClick ?? false}
          data-open={open}
        >
          <div
            ref={ref}
            className={cn(
              "relative z-[70] h-96 w-96 overflow-hidden rounded-lg bg-black",
              defaultAnimation &&
                "data-[open=true]:modal-open data-[open=false]:modal-exit",
              className,
            )}
            onClick={preventBubbling()}
            data-open={open}
            {...props}
          >
            {children}
          </div>
        </ModalOverlay>
      </ModalPortal>
    );
  },
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
        `invisible fixed inset-0 z-[60] flex items-center justify-center opacity-0
        backdrop-blur-md transition-all
        [transition:visibility_400ms_ease_0ms,opacity_400ms_ease]
        data-[open=true]:visible data-[open=true]:opacity-100`,
        className,
      )}
      onClick={preventBubbling(closeOnClick ? closeModal : undefined)}
      {...props}
    >
      {children}
    </div>
  ),
);

ModalOverlay.displayName = "ModalOverlay";

export { ModalPortal, Modal, ModalOverlay };
