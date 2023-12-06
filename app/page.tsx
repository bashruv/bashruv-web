import Image from "next/image";

import { Popup } from "@/src/components/popup";
import { TaskBar } from "@/src/components/task-bar";
import { GlassBox } from "@/src/components/glass-box";

export default function IndexPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-gray-950">
      <section className="relative w-full h-full z-10">
        <GlassBox className="">
          <Image
            src={"https://sagum-archive.bashruv.dev/favicon.ico"}
            width={32}
            height={32}
          />
          <Image
            src={"https://bci.bashruv.dev/favicon.svg"}
            width={32}
            height={32}
          />
          <Image
            src={"https://hello-untact.bashruv.dev/favicon.white.ico"}
            width={32}
            height={32}
          />
          <Image
            src={"https://stc.bashruv.dev/favicon.ico"}
            width={32}
            height={32}
          />
          <Image
            src={"https://finngram.bashruv.dev/assets/favicon.8356ab58.svg"}
            width={32}
            height={32}
          />
          <Image
            src={"https://dallem.com/favicon.ico"}
            width={32}
            height={32}
          />
          <Image
            src={"https://web.metabeat.io/favicon.ico"}
            width={32}
            height={32}
          />
        </GlassBox>
        <Popup />
        <TaskBar />
      </section>
      <Image
        src={
          "https://images.unsplash.com/photo-1558037173-1cd1dd4c805b?q=100&w=2574"
        }
        fill
        alt="background-image"
        className="object-cover object-center"
      />
    </main>
  );
}
