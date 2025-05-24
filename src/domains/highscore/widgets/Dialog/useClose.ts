import { RefObject, useEffect } from "react";

export function useClose(
  dialogRef: RefObject<HTMLDialogElement | null>,
  onClose: () => void
) {
  useEffect(() => {
    const element = dialogRef.current;
    if (!element) return;

    const handleClick = (event: MouseEvent) => {
      // Outside click
      if (event.target === dialogRef.current) {
        dialogRef.current?.close();
      }
    };

    element.addEventListener("close", onClose);
    element.addEventListener("click", handleClick);
    return () => {
      element.removeEventListener("close", onClose);
      element.removeEventListener("click", handleClick);
    };
  }, [onClose]);
}
