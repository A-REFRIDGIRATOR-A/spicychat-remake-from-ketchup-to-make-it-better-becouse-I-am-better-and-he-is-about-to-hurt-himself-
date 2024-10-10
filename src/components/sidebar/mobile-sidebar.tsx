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
          `fixed inset-0 z-40 hidden min-h-screen w-screen overflow-hidden opacity-0
          backdrop-blur-sm xs:hidden`,
          open && "block opacity-100",
        )}
        autoFocus={open}
      >
        <div
          className={cn(
            `absolute bottom-0 left-0 top-0 z-50 flex min-h-screen w-64 -translate-x-96
            overflow-hidden backdrop-blur-xl transition-all duration-500 xs:hidden`,
            open && "translate-x-0",
          )}
        >
          <button type="button" onClick={closeSidebar}>
            close
          </button>
        </div>
      </div>
    </>
  );
}
