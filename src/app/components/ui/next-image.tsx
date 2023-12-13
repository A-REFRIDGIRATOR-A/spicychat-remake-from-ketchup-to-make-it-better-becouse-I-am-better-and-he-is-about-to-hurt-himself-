// https://github.com/ccrsxx/twitter-clone/blob/main/src/components/ui/next-image.tsx

"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import type { ImageProps } from "next/image";

type NextImageProps = {
  alt: string;
  width?: number;
  height?: number;
  useSkeleton?: boolean;
  previewCount?: number;
  className?: string;
  imgClassName?: string;
  blurClassName?: string;
} & ImageProps;

export function NextImage({
  src,
  alt,
  width,
  height,
  useSkeleton,
  previewCount,
  className,
  imgClassName,
  blurClassName,
  ...rest
}: NextImageProps): JSX.Element {
  const [loading, setLoading] = useState(useSkeleton);

  const handleLoad = (): void => setLoading(false);

  return (
    <figure style={{ width }} className={className}>
      <Image
        className={twMerge(
          imgClassName, // use pointer-events-none to prevent Edge from showing image options
          loading
            ? blurClassName ?? "animate-pulse bg-[#71767B]"
            : previewCount === 1
            ? "!h-auto !min-h-0 !w-auto !min-w-0 rounded-lg object-contain"
            : "object-cover"
        )}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={handleLoad}
        layout="responsive"
        {...rest}
      />
    </figure>
  );
}
