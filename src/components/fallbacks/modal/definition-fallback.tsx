import { Skeleton } from "@/components/ui/skeleton";

export function DefinitionModalFallback() : JSX.Element
{
  return (
    <section
      className="outline-glow relative flex h-full w-full flex-col rounded-lg 
        [&>div]:rounded-lg bg-black"
    >
      <Skeleton className="relative h-52 w-full !rounded-b-none">
        <div
          className="absolute w-6 h-6 z-30 top-1 left-1 bg-black/20 rounded-full"
        />

        <div
          className="absolute right-1 top-1 z-30 rounded-full bg-black/20 w-6 h-6"
        />

        <div
          className="absolute bottom-1 right-1 z-30 rounded-xl bg-black/40
                  xs:bg-black/20 w-16 h-6"
        />
      </Skeleton>

      <div
        className="flex h-full flex-col gap-3 !rounded-t-none px-3 py-2"
      >
        <Skeleton className="mb-3 w-52 h-6" />

        <Skeleton className="w-full h-20" />

        <div className="mt-auto flex w-full flex-row items-center gap-3">
          <Skeleton
            className="rounded-full w-8 h-8 mb-1"
          />

          <Skeleton
            className="mb-1 h-8 w-full"
          />
        </div>
      </div>
    </section>
  )
}