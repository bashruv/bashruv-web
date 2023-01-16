import { AsciiArt } from "@src/components/ascii-art.component";
import { sleep } from "@src/utils/sleep";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [phase, setPhase] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
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
        } w-full h-screen flex justify-center items-center`}
      >
        {phase === 2 && (
          <div className="border border-black py-4 px-6">
            <AsciiArt />
            <p className="text-center mt-4 py-4">Welcome to bashruv.dev</p>
          </div>
        )}
      </section>
    </>
  );
}
