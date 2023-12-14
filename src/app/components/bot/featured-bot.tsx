import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { NextImage } from "../ui/next-image";

type FeaturedBotProps = {
  src: string;
  banner?: string;
  name: string;
};

export function FeaturedBot({
  src,
  banner,
  name,
}: FeaturedBotProps): JSX.Element {
  return (
    <Link
      href="#"
      className="flex flex-col xs:hover:scale-110 transition
                  duration-500 self-start w-96 xs:w-52 sm:w-64 lg:w-[23.2rem] h-40 group"
    >
      <div className="relative w-full h-full rounded-md overflow-hidden">
        <NextImage
          imgClassName="pointer-events-none"
          src={src}
          alt={banner ?? "/assets/harley.png"}
          layout="fill"
          draggable={false}
        />
      </div>

      <Avatar
        className="absolute bottom-1/4 top-8 xs:top-auto xs:-bottom-10 ml-10 lg:ml-8 ring-8 ring-black
                  xs:group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black
                  delay-100 !visible xs:shadow-none xs:ml-0"
        src={src}
        width={90}
      />

      <p
        className="text-shadow shadow-black ml-52 xs:ml-24 lg:ml-48 text-2xl
                  semi-bold -mt-10 z-10 xs:group-hover:-translate-x-0.5 lg:group-hover:-translate-x-10
                  transition-transform duration-500 delay-300
                  text-ellipsis h-14 overflow-hidden"
      >
        <span>{name}</span>
      </p>
    </Link>
  );
}
