import Image from "next/image";

import { Popup } from "@/src/components/popup";
import { TaskBar } from "@/src/components/task-bar";

export default function IndexPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-gray-950">
      <section className="relative w-full h-full z-10">
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
