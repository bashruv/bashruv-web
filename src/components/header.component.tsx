import { useEffect, useState } from "react";
import Clock from "react-live-clock";

export function Header() {
  const [clock, setClock] = useState(false);

  useEffect(() => {
    setClock(true);
  }, []);

  return (
    <header className="fixed top-0 flex w-full justify-between border-b-2 border-b-black px-8">
      <div className="flex gap-x-8">
        <button>
          <p>View</p>
        </button>
        <button>
          <p>Window</p>
        </button>
        <button>
          <p>Help</p>
        </button>
      </div>
      <div>{clock && <Clock format={"HH:mm:ss"} ticking />}</div>
    </header>
  );
}
