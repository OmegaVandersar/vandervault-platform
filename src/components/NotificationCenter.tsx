"use client";

import { useEffect, useState } from "react";

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // simulate incoming real-time event stream (replace with websocket later)
    const interval = setInterval(() => {
      const events = [
        "New deposit received (BTC)",
        "KYC verification submitted",
        "Withdrawal request pending",
        "New investor registered",
      ];

      const event = events[Math.floor(Math.random() * events.length)];
      setNotifications((prev) => [event, ...prev]);

      // sound alert (allowed browser-triggered)
      const audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
      );
      audio.play().catch(() => {});
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
      <h3 className="text-xl font-black mb-4">Live Notifications</h3>

      <div className="space-y-3 max-h-64 overflow-auto">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="text-sm text-zinc-300 border border-white/10 p-3 rounded-xl"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
