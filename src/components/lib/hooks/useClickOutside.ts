"use client";

import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react";

type UseClickOutsideReturn<T> = {
  ref: RefObject<T>;
  isClickedOutside: boolean;
};

export function useClickOutside<T extends HTMLElement>(
  externalRef?: RefObject<T>
): UseClickOutsideReturn<T> {
  const internalRef = useRef<T>(null);

  const [isClickedOutside, setIsClickedOutside] = useState(false);

  const ref = externalRef ?? internalRef;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClickedOutside(true);

        setTimeout(() => {
          setIsClickedOutside(false);
        }, 10);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }),
    [ref];

  return { ref, isClickedOutside };
}
