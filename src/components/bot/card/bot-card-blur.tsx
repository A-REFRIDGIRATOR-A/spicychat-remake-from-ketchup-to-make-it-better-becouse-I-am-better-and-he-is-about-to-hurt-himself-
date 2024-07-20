import { NextImage } from "@/components/ui/next-image";

type BotCardGlowProps = {
  src: string;
};

/** Causes repeated error on mobile (Safari) */
export function BotCardGlow({ src }: BotCardGlowProps): JSX.Element {
  return (
    <div className="non-selectable absolute inset-0 -z-10 hidden blur-2xl xs:block">
      <NextImage
        imgClassName="pointer-events-none"
        src={
          src !== "/assets/harley.png"
            ? "https://ndsc.b-cdn.net/" + src
            : "/assets/harley.png"
        }
        alt={src}
        layout="fill"
        draggable={false}
        quality={50}
        useSkeleton
        unoptimized
      />
      <div
        className="absolute inset-0 mt-10 bg-gradient-to-t from-black from-40% via-transparent
          to-transparent"
      />
    </div>
  );
}
