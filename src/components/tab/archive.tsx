"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import Draggable from "react-draggable";

import { Logo } from "@/src/icons/logo";
import { tabsAtom } from "@/src/store/tabs";
import { GlassBox } from "@/src/components/glass-box";
import ArchiveList from "@/src/constants/archive-list.json";

interface ArchiveItemProps {
  name: string;
  icon: string;
  urls: { type: string; url: string }[];
  desc: string;
}

function ArchiveItem({ name, icon, urls }: ArchiveItemProps) {
  return (
    <a href={urls[0].url} target="_blank">
      <GlassBox className="flex items-center justify-center aspect-square bg-neutral-950 bg-opacity-30">
        <Image src={icon} width={48} height={48} alt={name} />
      </GlassBox>
    </a>
  );
}

export function ArchiveTab() {
  const nodeRef = useRef(null);
  const [{ archive }, setTabs] = useAtom(tabsAtom);
  // const [tabOpen, setOpen] = useState(archive);

  function handleOpen() {
    gsap.to(nodeRef.current, { opacity: 1, duration: 0.2 });
  }

  function handleClose() {
    gsap
      .to(nodeRef.current, { opacity: 0, duration: 0.2 })
      // .then(() => setOpen(false))
      .then(() => setTabs((prevState) => ({ ...prevState, archive: false })));
  }

  useEffect(() => {
    if (archive) {
      // setOpen(true);
      handleOpen();
    } else {
      handleClose();
    }
  }, [archive]);

  // useEffect(() => {
  // if (tabOpen) {
  // handleOpen();
  // }
  // }, [tabOpen]);

  return (
    archive && (
      <Draggable nodeRef={nodeRef}>
        <GlassBox
          className="w-[26.25rem] left-5 top-5 absolute opacity-0"
          ref={nodeRef}
          onRequestClose={handleClose}
        >
          <div className="grid grid-cols-3 gap-8 p-6 pt-1">
            {ArchiveList.map((val) => (
              <ArchiveItem key={val.name} {...val} />
            ))}
            <div className="flex flex-col col-start-2 col-end-4 items-end justify-end opacity-30">
              <Logo className="scale-75 -mr-5" />
              <h1 className="text-4xl italic font-modern-dos block pr-2 leading-10 hover:cursor-default">
                Archive
              </h1>
            </div>
          </div>
        </GlassBox>
      </Draggable>
    )
  );
}
