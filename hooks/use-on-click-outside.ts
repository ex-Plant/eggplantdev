import { useEffect, type RefObject } from "react";

type EventType = "mousedown" | "mouseup" | "touchstart" | "touchend" | "pointerdown" | "pointerup";

export function useOnClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: (event: Event) => void,
  eventType: EventType = "mousedown",
) {
  useEffect(() => {
    function listener(event: Event) {
      const target = event.target as Node;
      if (!ref.current || ref.current.contains(target)) return;
      handler(event);
    }

    document.addEventListener(eventType, listener);
    return () => document.removeEventListener(eventType, listener);
  }, [ref, handler, eventType]);
}
