"use client";

import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react";

type UseHoverReturn<T> = {
  ref: RefObject<T>;
  isHovered: boolean;
};

export function useHover<T extends HTMLElement>(
  externalRef?: RefObject<T>
): UseHoverReturn<T> {
  const internalRef = useRef<T>(null);

  const [isHovered, setIsHovered] = useState(false);

  const ref = externalRef ?? internalRef;

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }),
    [ref];

  return { ref, isHovered };
}
