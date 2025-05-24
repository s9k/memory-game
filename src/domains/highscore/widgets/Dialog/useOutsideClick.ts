import { RefObject, useEffect } from "react";

export function useOutsideClick(
  dialogRef: RefObject<HTMLDialogElement | null>,
  onClose: () => void
) {
  useEffect(() => {
    const element = dialogRef.current;
    if (!element) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialogRef.current) {
        onClose();
      }
    };

    element.addEventListener("click", handleClick);
    return () => element.removeEventListener("click", handleClick);
  }, [onClose]);
}
