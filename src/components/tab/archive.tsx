"use client";

import gsap from "gsap";
import Image from "next/image";
import { useAtom } from "jotai";
import Draggable from "react-draggable";
import { useCallback, useEffect, useRef, useState } from "react";

import { Logo } from "@/src/icons/logo";
import { tabsAtom } from "@/src/store/tabs";
import { GlassBox } from "@/src/components/glass-box";
import ArchiveList from "@/src/constants/archive-list.json";

interface ArchiveItemProps extends ArchiveListType {
  onClick: (items: ArchiveListType) => void;
}

function ArchiveItem({ onClick, ...props }: ArchiveItemProps) {
  return (
    <button onClick={() => onClick(props)}>
      <GlassBox className="flex items-center justify-center aspect-square bg-neutral-950 bg-opacity-30">
        <Image src={props.icon} width={48} height={48} alt={props.name} />
      </GlassBox>
    </button>
  );
}

export function ArchiveTab() {
  const nodeRef = useRef(null);
  const [{ archive }, setTabs] = useAtom(tabsAtom);
  const [selectProject, setProject] = useState<ArchiveListType | null>(null);

  function handleOpen() {
    gsap.to(nodeRef.current, { opacity: 1, duration: 0.2 });
    return;
  }

  const handleClose = useCallback(() => {
    gsap
      .to(nodeRef.current, { opacity: 0, duration: 0.2 })
      .then(() => setTabs((prevState) => ({ ...prevState, archive: false })));
  }, [setTabs]);

  function handleProject(project: ArchiveListType) {
    if (selectProject !== null && selectProject.id === project.id) {
      setProject(null);
      return;
    }
    setProject(project);
    return;
  }

  useEffect(() => {
    if (archive) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [archive, handleClose]);

  return (
    <Draggable nodeRef={nodeRef}>
      <GlassBox
        className="left-5 top-5 absolute opacity-0"
        ref={nodeRef}
        onRequestClose={handleClose}
      >
        <div className="flex">
          <div className="grid flex-shrink-0 grid-cols-3 gap-8 p-6 pt-1 w-[26.25rem]">
            {ArchiveList.map((val) => (
              <ArchiveItem key={val.name} onClick={handleProject} {...val} />
            ))}
            <div className="flex flex-col col-start-2 col-end-4 items-end justify-end opacity-30">
              <Logo className="scale-75 -mr-5" />
              <h1 className="text-4xl italic font-modern-dos block pr-2 leading-10 hover:cursor-default">
                Archive
              </h1>
            </div>
          </div>
          {selectProject !== null && (
            <div className="w-[26.25rem] px-6 pt-5 mt-1 mb-6 border-l-2 border-opacity-30 border-white">
              <div className="flex gap-6 items-center">
                <Image
                  src={selectProject.icon}
                  width={60}
                  height={60}
                  alt={selectProject.name}
                />
                <h1 className="text-4xl font-bold h-20 flex items-center line-clamp-2">
                  {selectProject.name}
                </h1>
              </div>
              {selectProject.urls.map((val) => (
                <a href={val.url} key={val.url}>
                  {val.text}
                </a>
              ))}
              <p>{selectProject.desc}</p>
            </div>
          )}
        </div>
      </GlassBox>
    </Draggable>
  );
}
