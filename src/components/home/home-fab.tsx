import { CustomIcon } from "../ui/custom-icon";
import { FAB } from "../ui/fab";

export function HomeFAB(): JSX.Element {
  return (
    <div
      className="fixed bottom-10 right-10 z-30 flex flex-col items-center
                    gap-3"
    >
      <FAB className="static">
        <CustomIcon className="w-4 h-4 text-white" iconName="PlusIcon" />
      </FAB>

      <FAB className="static">
        <CustomIcon iconName="MagnifyingGlass" />
      </FAB>
    </div>
  );
}
