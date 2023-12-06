"use client";

import { GlassBox } from "./glass-box";
import { useClock } from "../hooks/use-clock";

export function TaskBar() {
  const { date, time } = useClock();

  return (
    <GlassBox className="right-5 py-4 px-6 bottom-5 absolute">
      <p className="text-xl text-right">{date}</p>
      <h1 className="text-5xl">{time}</h1>
    </GlassBox>
  );
}
