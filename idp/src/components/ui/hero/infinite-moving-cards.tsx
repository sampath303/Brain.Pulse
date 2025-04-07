"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;

    const scroller = scrollerRef.current;
    const itemsArray = Array.from(scroller.children);

    itemsArray.forEach((item) => {
      const clone = item.cloneNode(true);
      scroller.appendChild(clone);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    let duration = "40s";
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden",
        "relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max gap-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[300px] shrink-0 rounded-xl border border-zinc-200 px-4 py-2 bg-white dark:border-zinc-700 dark:bg-zinc-900"
          >
            <blockquote>
              <p className="text-xs text-neutral-800 dark:text-gray-100">
                {item.quote}
              </p>
              <footer className="mt-2 text-xs text-neutral-500 dark:text-gray-400">
                <span className="block font-medium">{item.name}</span>
                <span>{item.title}</span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
