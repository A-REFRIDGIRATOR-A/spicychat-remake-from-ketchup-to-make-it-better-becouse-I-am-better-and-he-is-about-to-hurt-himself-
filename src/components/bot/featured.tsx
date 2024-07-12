import { NextImage } from "../ui/next-image";

export function Featured(): JSX.Element {
  return (
    <div className="w-full h-96">
      <div className="relative w-full h-full xs:rounded-md overflow-hidden blur-sm">
        <NextImage src="/assets/harley.png" alt="featured" layout="fill" />
      </div>
    </div>
  );
}
