import { BotsContainer } from "../home/bots-container";
import { Skeleton } from "../ui/skeleton";

export function ShowcaseBotsFallback(): JSX.Element {
  function Skeletons(): JSX.Element {
    return (
      <>
        {Array.from({ length: 14 }, (__, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-44 w-44 rounded-md xs:h-52 xs:w-52" />

            <Skeleton className="h-4 w-16" />

            <Skeleton className="h-5 w-full" />

            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </>
    );
  }

  return (
    <BotsContainer className="py-10">
      <Skeletons />
    </BotsContainer>
  );
}
