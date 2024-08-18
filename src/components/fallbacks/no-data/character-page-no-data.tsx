import { CustomIcon } from "@/components/ui/custom-icon";

export function CharacterPageNoData({ id }: { id: string }): JSX.Element {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="non-selectable relative h-96 w-full bg-gray-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        <div
          className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between
            gap-3 p-5"
        >
          <h1
            className="mt-auto w-52 overflow-hidden text-ellipsis whitespace-nowrap text-3xl
              font-semibold"
          >
            {id}
          </h1>

          <div className="grid grid-flow-row grid-cols-2 place-items-end">
            <span className="col-span-2 text-4xl font-bold">0%</span>
            <span className="col-span-2 flex items-center gap-2 text-2xl">
              0
              <CustomIcon iconName="MessageIcon" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 px-6">
        <span className="ml-auto self-start rounded-full bg-gray-dark px-3 py-0.5 font-semibold">
          0 tokens
        </span>

        <div className="relative flex flex-col gap-3 rounded-lg bg-gray-dark">
          <p className="p-5 text-center">
            This chatbot has either been deleted, unlisted, privated or it never
            existed.
          </p>
        </div>
      </div>
    </div>
  );
}
