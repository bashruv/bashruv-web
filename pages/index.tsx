import { AsciiArt } from "@src/components/ascii-art.component";
import { sleep } from "@src/utils/sleep";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [phase, setPhase] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    const localItem = localStorage.getItem("@login-date");

    if (localItem !== null) {
      const localDate = new Date(localItem);
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);

      if (localDate > today) {
        push({ pathname: "/home" });
      }
    }

    async function phaseTimer() {
      await sleep(1000);
      setPhase(1);
      await sleep(1000);
      setPhase(2);
      await sleep(2000);
      localStorage.setItem(
        "@login-date",
        new Date().toISOString().slice(0, 10)
      );
      push({ pathname: "/home" });
    }
    phaseTimer();
  }, [push]);

  return (
    <>
      <Head>
        {phase !== 0 ? <title>BASHRUV.DEV</title> : <title>BOOTING...</title>}
        <meta name="description" content="Welcome to bashruv.dev" />
      </Head>
      <section
        className={`${
          phase === 0 ? "bg-black" : "bg-slate-200"
        } flex h-screen w-full items-center justify-center`}
      >
        {phase === 2 && (
          <div className="border border-black py-4 px-6">
            <AsciiArt />
            <p className="mt-4 py-4 text-center">Welcome to bashruv.dev</p>
          </div>
        )}
      </section>
    </>
  );
}
