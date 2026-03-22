"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "@/helpers/cn";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

gsap.registerPlugin(ScrollTrigger);

// Character pool for random scramble display
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// How fast each letter cycles through random chars (ms between swaps)
const SCRAMBLE_INTERVAL_MS = 20;
// Delay between each letter starting its resolve/unsolve (creates left-to-right cascade)
const CASCADE_DELAY_MS = 50;
// How many random chars a letter shows before locking to the correct one
const SCRAMBLE_CYCLES = 6;
// How long the scramble-out animation runs before freezing in randomized state
const SCRAMBLE_OUT_DURATION_MS = 500;

type ScrambleTextPropsT = {
  text: string;
  className?: string;
  triggerOnMount?: boolean;
};

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export const ScrambleText = ({ text, className, triggerOnMount = false }: ScrambleTextPropsT) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Separate tracking for timeouts and intervals — avoids double-clear ambiguity
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const intervalsRef = useRef<Set<ReturnType<typeof setInterval>>>(new Set());
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const chars = text.split("");
      const spans = container.children as HTMLCollectionOf<HTMLSpanElement>;

      // Skip animation entirely for reduced motion — show final text immediately
      if (prefersReducedMotion) {
        chars.forEach((ch, i) => {
          spans[i].textContent = ch;
          spans[i].className = "opacity-100";
        });
        return;
      }

      // Initialize with random chars (spaces stay as spaces for correct word wrapping)
      chars.forEach((ch, i) => {
        spans[i].textContent = ch === " " ? " " : randomChar();
        spans[i].className = "opacity-70";
      });

      // Kill all running timers — called before starting any new animation
      // to prevent overlapping scramble-in and scramble-out from conflicting
      const clearTimers = () => {
        timeoutsRef.current.forEach((id) => clearTimeout(id));
        intervalsRef.current.forEach((id) => clearInterval(id));
        timeoutsRef.current.clear();
        intervalsRef.current.clear();
      };

      // Self-cleaning timeout — removes its own ID from the set after firing
      const addTimeout = (fn: () => void, ms: number) => {
        const id = setTimeout(() => {
          timeoutsRef.current.delete(id);
          fn();
        }, ms);
        timeoutsRef.current.add(id);
      };

      // Tracked interval — stored in set so clearTimers can kill it
      const addInterval = (fn: () => void, ms: number) => {
        const id = setInterval(fn, ms);
        intervalsRef.current.add(id);
        return id;
      };

      // Scroll enters viewport → resolve letters left-to-right
      // Each letter: wait (cascade delay) → cycle through random chars → lock to correct char
      const scrambleIn = () => {
        clearTimers();

        chars.forEach((char, i) => {
          // Spaces stay as spaces for word wrapping — just toggle opacity with the cascade
          if (char === " ") {
            const delay = i * CASCADE_DELAY_MS;
            addTimeout(
              () => {
                spans[i].className = "opacity-100";
              },
              delay + SCRAMBLE_CYCLES * SCRAMBLE_INTERVAL_MS,
            );
            return;
          }

          let cycles = 0;
          // Each letter starts its animation later than the previous → cascade effect
          const delay = i * CASCADE_DELAY_MS;

          addTimeout(() => {
            // Rapidly swap this letter through random chars
            const intervalId = addInterval(() => {
              cycles++;

              // After enough random cycles, lock to the correct character
              if (cycles >= SCRAMBLE_CYCLES) {
                clearInterval(intervalId);
                intervalsRef.current.delete(intervalId);
                spans[i].textContent = char;
                spans[i].className = "opacity-100";
                return;
              }

              // Still scrambling — show a random character
              spans[i].textContent = randomChar();
            }, SCRAMBLE_INTERVAL_MS);
          }, delay);
        });
      };

      // Scroll leaves viewport → unsolve letters right-to-left, then freeze
      const scrambleOut = () => {
        clearTimers();

        // Reverse order so the last letter unsettles first → right-to-left cascade
        const reversed = [...chars.keys()].reverse();

        reversed.forEach((i, order) => {
          // Spaces stay as spaces — just dim opacity with the cascade
          if (chars[i] === " ") {
            const delay = order * CASCADE_DELAY_MS;
            addTimeout(() => {
              spans[i].className = "opacity-70";
            }, delay);
            return;
          }

          const delay = order * CASCADE_DELAY_MS;

          addTimeout(() => {
            // Mark letter as unresolved (drops opacity)
            spans[i].className = "opacity-70";
            3;
            // Start cycling through random chars indefinitely (until freeze)
            addInterval(() => {
              spans[i].textContent = randomChar();
            }, SCRAMBLE_INTERVAL_MS);
          }, delay);
        });

        // After freeze duration, stop all scrambling — letters freeze in their last random state
        addTimeout(() => {
          intervalsRef.current.forEach((id) => clearInterval(id));
          intervalsRef.current.clear();
        }, SCRAMBLE_OUT_DURATION_MS);
      };

      // Check if element is currently in the viewport
      const isInViewport = () => {
        const rect = container.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      };

      if (triggerOnMount || isInViewport()) {
        scrambleIn();
      }

      if (!triggerOnMount) {
        // Wire up GSAP ScrollTrigger — fires scrambleIn/Out as element enters/leaves viewport
        ScrollTrigger.create({
          trigger: container,
          start: "center bottom-=10%",
          end: "center top+=8%",
          onEnter: scrambleIn,
          onLeave: scrambleOut,
          onEnterBack: scrambleIn,
          onLeaveBack: scrambleOut,
        });

        setTimeout(() => ScrollTrigger.refresh(), 100);
      }

      return () => {
        clearTimers();
      };
    },
    { scope: containerRef, dependencies: [text, prefersReducedMotion], revertOnUpdate: true },
  );

  // Render spans once — all animation updates happen via direct DOM mutation
  return (
    <span key={text} ref={containerRef} className={cn("wrap-break-words block whitespace-pre-wrap", className)}>
      {text.split("").map((_, i) => (
        <span key={i} className="opacity-70" />
      ))}
    </span>
  );
};
