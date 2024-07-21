import { Skeleton } from "@/components/ui/skeleton";

export function DefinitionModalFallback(): JSX.Element {
  return (
    <section
      className="outline-glow relative flex h-full w-full flex-col rounded-lg bg-black
        [&>div]:rounded-lg"
    >
      <Skeleton className="relative h-52 w-full !rounded-b-none">
        <div className="absolute left-1 top-1 z-30 h-6 w-6 rounded-full bg-black/20" />

        <div className="absolute right-1 top-1 z-30 h-6 w-6 rounded-full bg-black/20" />

        <div className="absolute bottom-1 right-1 z-30 h-6 w-16 rounded-xl bg-black/40 xs:bg-black/20" />
      </Skeleton>

      <div className="flex h-full flex-col gap-3 !rounded-t-none px-3 py-2">
        <Skeleton className="mb-3 h-6 w-52" />

        <Skeleton className="h-20 w-full" />

        <div className="mt-auto flex w-full flex-row items-center gap-3">
          <Skeleton className="mb-1 h-8 w-8 rounded-full" />

          <Skeleton className="mb-1 h-8 w-full" />
        </div>
      </div>
    </section>
  );
}
