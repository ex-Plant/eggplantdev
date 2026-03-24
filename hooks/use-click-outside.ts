import { RefObject, useEffect } from "react";

export function useClickOutside(
  refs: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
  handler: () => void,
) {
  useEffect(() => {
    const refList = Array.isArray(refs) ? refs : [refs];
    const listener = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (refList.some((r) => r.current?.contains(target))) return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
