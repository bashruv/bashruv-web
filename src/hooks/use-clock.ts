import { useEffect, useRef, useState } from "react";

export function useClock() {
  const clockRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [date, setDate] = useState({ date: "", time: "" });

  function handleDate() {
    const now = new Date();
    const date = now.toLocaleDateString("ko-KR", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = now.toLocaleTimeString("ko-KR", {
      hour: "numeric",
      minute: "numeric",
    });
    setDate({ date, time });
  }

  useEffect(() => {
    clockRef.current = setInterval(handleDate, 1000);
    return () => {
      clearInterval(clockRef.current);
    };
  }, []);

  return date;
}
