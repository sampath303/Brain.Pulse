"use client";

import _React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../hero/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className=" flex flex-col bg-transparent">
        <div className="mt-auto">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    );
  }

const testimonials = [
  {
    quote:
      "Built the brain behind the brains. Trained the model so well, it might diagnose its own emotions soon.",
    name: "Hemavardhan Velamakanni",
    title: "",
  },
  {
    quote:
      "Wrangled datasets like a cowboy, cooked up preprocessing tricks, added custom images, and wrote a report Shakespeare would envy.",
    name: "Mithesh Malineni",
    title: "",
  },
  {
    quote: "Turned pixels into perfection. Designed a frontend so smooth like butter, users click just to admire the UI.",
    name: "Sampath Kumar",
    title: "",
  },
  {
    quote:
      "Hooked the brain to the body. Mastered Flask, stitched backend to frontend — basically the project’s full-stack glue wizard.",
    name: "Gautham",
    title: "",
  },
  {
    quote:
      "Provided the brains without coffee. Helped code, debug, style, and sprinkle humor like an overcaffeinated senior dev that never sleeps.",
    name: "ChatGPT",
    title: "",
  },
];
