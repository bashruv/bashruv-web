"use client";

import { useRef, useState } from "react";

import { Logo } from "../icons/logo";
import { GlassBox } from "./glass-box";
import gsap from "gsap";

export function Popup() {
  const nodeRef = useRef(null);

  const [isClosed, setClose] = useState(false);

  function handleClose() {
    gsap.to(nodeRef.current, { opacity: 0, duration: 0.5 }).then(() => {
      setClose(true);
    });
  }

  return (
    !isClosed && (
      <GlassBox
        className="p-8 w-[26.25rem] absolute right-5 bottom-36"
        ref={nodeRef}
      >
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold leading-10">Welcome to</h1>
          <Logo />
        </div>
        <p className="text-lg mt-6 leading-tight break-keep">
          이 홈페이지는 이디미의 포트폴리오 아카이브 겸 여러 실험을 진행하는
          사이트입니다.
          <br />
          <br />
          좌측 하단 아이콘을 클릭하여 확인해보세요!
        </p>
        <button
          className="bg-indigo-600 self-end px-6 py-2 rounded-full mt-8"
          onClick={handleClose}
        >
          <p className="font-bold">닫기</p>
        </button>
      </GlassBox>
    )
  );
}
