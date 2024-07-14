import { NextImage } from "@/components/ui/next-image";

type BotCardGlowProps = {
  src: string;
};

export function BotCardGlow({ src }: BotCardGlowProps): JSX.Element {
  return (
    <div className="non-selectable absolute inset-0 -z-10 blur-2xl">
      <NextImage
        imgClassName="pointer-events-none"
        src={
          src !== "/assets/harley.png"
            ? "https://ndsc.b-cdn.net/" + src
            : "/assets/harley.png"
        }
        alt="Harley Quinn"
        layout="fill"
        draggable={false}
        useSkeleton
        quality={50}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black from-40% via-transparent to-transparent mt-10" />
    </div>
  );
}
