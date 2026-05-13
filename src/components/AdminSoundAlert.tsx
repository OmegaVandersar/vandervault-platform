"use client";

import { useEffect, useRef, useState } from "react";

export default function AdminSoundAlert() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    );
  }, []);

  // simulate incoming alert (later we connect to real backend/websocket)
  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => {
      // simulate investor activity alert
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 30000); // every 30 sec (demo only)

    return () => clearInterval(interval);
  }, [enabled]);

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

      <h3 className="text-xl font-black mb-4">
        Admin Alert System
      </h3>

      <p className="text-zinc-500 text-sm mb-6">
        Enable real-time alert sound when investor activity is detected.
      </p>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-full py-3 rounded-2xl font-bold ${
          enabled
            ? "bg-green-500 text-black"
            : "bg-amber-500 text-black"
        }`}
      >
        {enabled ? "Alerts Enabled" : "Enable Sound Alerts"}
      </button>

    </div>
  );
}
