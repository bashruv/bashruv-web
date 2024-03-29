"use client";

import gsap from "gsap";
import { useAtom } from "jotai";
import Draggable from "react-draggable";
import { useCallback, useEffect, useRef, useState } from "react";

import "@corbado/webcomponent/pkg/auth_cui.css";

import { Logo } from "@/src/icons/logo";
import { tabsAtom } from "@/src/store/tabs";
import { GlassBox } from "@/src/components/glass-box";

export function AdminTab() {
  const nodeRef = useRef(null);
  const [session, setSession] = useState(null);
  const [{ admin }, setTabs] = useAtom(tabsAtom);
  const [user, setUser] = useState<User | null>(null);

  function handleOpen() {
    gsap.to(nodeRef.current, { opacity: 1, duration: 0.2 });
    return;
  }

  const handleClose = useCallback(() => {
    gsap
      .to(nodeRef.current, { opacity: 0, duration: 0.2 })
      .then(() => setTabs((prevState) => ({ ...prevState, admin: false })));
  }, [setTabs]);

  async function handleLogout() {
    // @ts-ignore
    await session.logout();
    setUser(null);
  }

  useEffect(() => {
    if (admin) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [admin, handleClose]);

  useEffect(() => {
    import("@corbado/webcomponent")
      .then((module) => {
        const Corbado = module.default || module;
        setSession(new Corbado.Session(process.env.NEXT_PUBLIC_PROJECT_ID));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (session) {
      console.log(session);
      // @ts-ignore
      session.refresh((user: User) => {
        setUser(user);
      });
    }
  }, [session]);

  return (
    <Draggable nodeRef={nodeRef} handle=".header-bar">
      <GlassBox
        className="w-[26.25rem] pb-4 left-5 top-5 absolute opacity-0"
        ref={nodeRef}
        onRequestClose={handleClose}
      >
        <div className="flex flex-col col-start-2 col-end-4 items-center justify-center opacity-30 mb-4">
          <Logo className="scale-75" />
          <h1 className="text-4xl italic font-modern-dos block pr-2 leading-10 hover:cursor-default">
            Admin Panel
          </h1>
        </div>
        {!user ? (
          <>
            <p className="font-medium text-xs mt-4 self-center opacity-30 mb-2">
              Powered by Corbado
            </p>
            <div className="w-96 rounded-lg self-center bg-white relative z-10">
              <corbado-auth
                project-id={process.env.NEXT_PUBLIC_PROJECT_ID}
                conditional="yes"
              >
                <input
                  name="username"
                  id="corbado-username"
                  data-input="username"
                  required
                  autoComplete="webauthn"
                />
              </corbado-auth>
            </div>
          </>
        ) : (
          <div className="px-6 pt-4 pb-2">
            <h1 className="text-2xl font-bold">
              Welcome Back,
              <br />
              {user.userFullName}
            </h1>
            <button
              className="bg-red-600 self-end px-6 py-2 rounded-full mt-8"
              onClick={handleLogout}
            >
              <p className="font-bold">로그아웃</p>
            </button>
          </div>
        )}
      </GlassBox>
    </Draggable>
  );
}
