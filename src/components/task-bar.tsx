"use client";

import { GlassBox } from "./glass-box";
import { useClock } from "../hooks/use-clock";
import Image from "next/image";

export function TaskBar() {
  const { date, time } = useClock();

  return (
    <div className="right-5 flex bottom-5 absolute gap-4">
      <GlassBox className="!flex-row items-center px-4 gap-4">
        <Image
          src={"/icons/archive.png"}
          width={80}
          height={80}
          alt="archive"
        />
        <Image
          src={"/icons/archive.png"}
          width={80}
          height={80}
          alt="archive"
        />
        <Image
          src={"/icons/archive.png"}
          width={80}
          height={80}
          alt="archive"
        />
        <Image
          src={"/icons/archive.png"}
          width={80}
          height={80}
          alt="archive"
        />
      </GlassBox>
      <GlassBox className="py-4 px-6">
        <p className="text-xl text-right">{date || "로딩 중..."}</p>
        <h1 className="text-5xl">{time || "로딩 중..."}</h1>
      </GlassBox>
    </div>
  );
}
