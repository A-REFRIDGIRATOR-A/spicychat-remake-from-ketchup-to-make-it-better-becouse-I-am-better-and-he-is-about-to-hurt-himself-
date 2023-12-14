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
  width = 50,
  className,
}: AvatarProps): JSX.Element {
  return (
    <div
      className={twMerge("relative rounded-full overflow-hidden", className)}
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
