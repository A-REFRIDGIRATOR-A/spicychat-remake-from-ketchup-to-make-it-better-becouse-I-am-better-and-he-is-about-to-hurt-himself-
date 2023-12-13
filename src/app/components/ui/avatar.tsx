import { NextImage } from "./next-image";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  src: string;
  alt?: string;
  width?: number;
  className?: string;
};

export function Avatar({
  src,
  alt,
  width,
  className,
}: AvatarProps): JSX.Element {
  return (
    <div
      className={twMerge(
        "relative rounded-full overflow-hidden w-50 h-50",
        className
      )}
      style={{ width, height: width }}
    >
      <NextImage
        src={src}
        alt={alt ?? "Avatar"}
        layout="fill"
        draggable={false}
      />
    </div>
  );
}
