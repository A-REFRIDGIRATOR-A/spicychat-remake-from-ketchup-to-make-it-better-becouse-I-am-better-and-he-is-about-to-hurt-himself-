import { cn } from "../lib/cn";

type MobileSidebarProps = {
  open: boolean;
  closeSidebar: () => void;
};

export function MobileSidebar({
  open,
  closeSidebar,
}: MobileSidebarProps): JSX.Element {
  return (
    <>
      <div
        className={cn(
          `xs:hidden fixed inset-0 min-h-screen w-screen z-40
          backdrop-blur-sm opacity-0 hidden overflow-hidden`,
          open && "opacity-100 block"
        )}
        autoFocus={open}
      >
        <div
          className={cn(
            `absolute left-0 top-0 bottom-0 w-64 min-h-screen backdrop-blur-xl z-50
          transition-all duration-500 -translate-x-96 xs:hidden flex overflow-hidden`,
            open && "translate-x-0"
          )}
        >
          <button onClick={closeSidebar}>close</button>
        </div>
      </div>
    </>
  );
}
