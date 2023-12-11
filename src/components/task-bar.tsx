"use client";

import Image from "next/image";
import { useSetAtom } from "jotai";

import { GlassBox } from "./glass-box";
import { tabsAtom } from "../store/tabs";
import { useClock } from "../hooks/use-clock";

export function TaskBar() {
  const { date, time } = useClock();
  const setTabs = useSetAtom(tabsAtom);

  function handleArchiveTab() {
    setTabs((prevState) => ({ ...prevState, archive: true }));
  }

  return (
    <div className="right-5 flex bottom-5 absolute gap-4">
      <GlassBox className="!flex-row items-center px-4 gap-4">
        <GlassBox hoverEnable Component="button" onClick={handleArchiveTab}>
          <Image
            src={"/icons/archive.png"}
            width={80}
            height={80}
            alt="archive"
          />
        </GlassBox>
      </GlassBox>
      <GlassBox className="py-4 px-6 gap-6 !flex-row items-center">
        <div>
          <p className="text-xl text-right">{date || "로딩 중..."}</p>
          <h1 className="text-5xl">{time || "로딩 중..."}</h1>
        </div>
        <GlassBox>
          <Image
            src={"/icons/archive.png"}
            width={80}
            height={80}
            alt={"user"}
          />
        </GlassBox>
      </GlassBox>
    </div>
  );
}
