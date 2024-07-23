import { Skeleton } from "../ui/skeleton";

export function CharacterLayoutFallback(): JSX.Element {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="relative h-96 w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        <div
          className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between
            gap-3 p-5"
        >
          <Skeleton className="h-10 w-52" />

          <Skeleton className="h-16 w-16" />
        </div>
      </Skeleton>

      <div className="mt-5 flex w-full flex-col gap-3 px-6">
        <Skeleton className="h-8 w-full" />

        <Skeleton className="h-8 w-full" />

        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}
