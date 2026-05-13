"use client";

import { useEffect, useState } from "react";
import { PlatformEvent, subscribe, startDemoEvents } from "@/lib/event-engine";

export default function NotificationCenter() {
  const [events, setEvents] = useState<PlatformEvent[]>([]);

  useEffect(() => {
    startDemoEvents();

    const handler = (event: PlatformEvent) => {
      setEvents((prev) => [event, ...prev.slice(0, 9)]);

      // sound alert (browser-safe trigger)
      const audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
      );
      audio.play().catch(() => {});
    };

    subscribe(handler);
  }, []);

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

      <h3 className="text-xl font-black mb-4">
        Live Activity Feed
      </h3>

      <div className="space-y-3 max-h-80 overflow-auto">

        {events.map((e) => (
          <div
            key={e.id}
            className="border border-white/10 p-4 rounded-xl"
          >
            <p className="text-white font-semibold">{e.message}</p>
            <p className="text-xs text-zinc-500 mt-1">
              {new Date(e.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}
