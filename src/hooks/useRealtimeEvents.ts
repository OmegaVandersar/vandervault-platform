"use client";

import { useEffect, useState } from "react";

export type RealtimeEvent = {
  message: string;
  time: string;
};

export default function useRealtimeEvents() {
  const [event, setEvent] = useState<RealtimeEvent | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      setEvent(e.detail);
    };

    window.addEventListener("FINTECH_EVENT", handler);

    return () => {
      window.removeEventListener("FINTECH_EVENT", handler);
    };
  }, []);

  return event;
}
