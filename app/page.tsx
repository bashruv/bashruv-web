"use client";

import Image from "next/image";
import { Provider, useAtomValue } from "jotai";

import { Popup } from "@/src/components/popup";
import { TaskBar } from "@/src/components/task-bar";
import { AdminTab } from "@/src/components/tab/admin";
import { ArchiveTab } from "@/src/components/tab/archive";
import { tabsAtom } from "@/src/store/tabs";

function IndexPage() {
  const tabs = useAtomValue(tabsAtom);

  return (
    <main className="h-screen w-screen overflow-hidden bg-gray-950">
      <section className="relative w-full h-full z-10">
        {tabs.archive && <ArchiveTab />}
        {tabs.admin && <AdminTab />}
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

export default function Index() {
  return (
    <Provider>
      <IndexPage />
    </Provider>
  );
}
