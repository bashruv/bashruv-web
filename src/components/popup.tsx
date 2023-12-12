"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/src/icons/logo";
import { GlassBox } from "@/src/components/glass-box";

export function Popup() {
  const nodeRef = useRef(null);

  const [isClosed, setClose] = useState(true);

  function handleClose() {
    gsap.to(nodeRef.current, { opacity: 0, duration: 0.5 }).then(() => {
      setClose(true);
    });
  }

  function handlePermanentlyClose() {
    localStorage.setItem("popup", "true");
    handleClose();
  }

  useEffect(() => {
    const isPopupPermanentlyClosed = localStorage.getItem("popup");

    if (isPopupPermanentlyClosed === null) {
      setClose(false);
    }
  }, []);

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
        <div className="flex justify-end items-center mt-8 gap-5">
          <button onClick={handlePermanentlyClose}>
            <p className="font-medium">다시는 보지 않기</p>
          </button>
          <button
            className="bg-indigo-600 px-6 py-2 rounded-full"
            onClick={handleClose}
          >
            <p className="font-bold">닫기</p>
          </button>
        </div>
      </GlassBox>
    )
  );
}
