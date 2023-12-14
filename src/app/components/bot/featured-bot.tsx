import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { NextImage } from "../ui/next-image";

export function FeaturedBot(): JSX.Element {
  return (
    <Link
      href="#"
      className="flex flex-col hover:scale-110 transition
                  duration-500 self-start w-96 h-40 group"
    >
      <div className="relative w-full h-full rounded-md overflow-hidden">
        <NextImage
          src="/assets/harley.png"
          alt="Harley Quinn"
          layout="fill"
          draggable={false}
        />
      </div>

      <Avatar
        className="absolute -bottom-10 ml-10 ring-8 ring-black
                  group-hover:scale-110 transition-transform duration-500
                  delay-100"
        src="/assets/harley.png"
        width={90}
      />

      <p
        className="text-shadow shadow-black ml-52 text-2xl
                  semi-bold -mt-10 z-10 group-hover:-translate-x-10
                  transition-transform duration-500 delay-300"
      >
        Harley Quinn
      </p>
    </Link>
  );
}
