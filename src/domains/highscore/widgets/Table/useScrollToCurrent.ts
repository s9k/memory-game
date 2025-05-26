import { useEffect } from "react";
import { DATA_ID_ATTRIBUTE } from "./constants";

export function useScrollToCurrent(
  containerRef: React.RefObject<HTMLElement | null>,
  currentId: string
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const highlightedRow = containerRef.current.querySelector(
      `[${DATA_ID_ATTRIBUTE}="${currentId}"]`
    );
    if (!highlightedRow) return;

    highlightedRow.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);
}
