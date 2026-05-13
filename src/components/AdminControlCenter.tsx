"use client";

import { useEffect, useState } from "react";

type EventItem = {
  id: string;
  message: string;
  time: string;
};

export default function AdminControlCenter() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const pool = [
      "New BTC deposit received (€12,450)",
      "KYC verification submitted",
      "Withdrawal request (€2,100)",
      "New investor login detected",
      "USDT ERC20 deposit confirmed",
    ];

    const interval = setInterval(() => {
      const event: EventItem = {
        id: Math.random().toString(),
        message: pool[Math.floor(Math.random() * pool.length)],
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [event, ...prev.slice(0, 9)]);

      // SOUND ONLY IF USER ENABLED IT
      if (soundEnabled) {
        const audio = new Audio(
          "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
        );

        audio.play().catch(() => {});
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [soundEnabled]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">Admin Control Center</h2>
        <p className="text-zinc-500 mt-2">
          Live monitoring system for platform activity
        </p>

        {/* SOUND TOGGLE (IMPORTANT FIX) */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-black font-bold"
        >
          {soundEnabled ? "Disable Alert Sound" : "Enable Alert Sound"}
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl">
          <p className="text-sm text-zinc-500">Active Users</p>
          <p className="text-2xl font-black">1,284</p>
        </div>

        <div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl">
          <p className="text-sm text-zinc-500">Pending KYC</p>
          <p className="text-2xl font-black text-yellow-400">47</p>
        </div>

        <div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl">
          <p className="text-sm text-zinc-500">Deposits Today</p>
          <p className="text-2xl font-black text-green-400">€84,320</p>
        </div>

        <div className="bg-zinc-950 border border-white/10 p-4 rounded-2xl">
          <p className="text-sm text-zinc-500">System</p>
          <p className="text-2xl font-black text-green-400">ONLINE</p>
        </div>

      </div>

      {/* LIVE FEED */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          Live Activity Feed
        </h3>

        <div className="space-y-3 max-h-96 overflow-auto">

          {events.map((e) => (
            <div
              key={e.id}
              className="flex justify-between border border-white/10 p-4 rounded-xl"
            >
              <p>{e.message}</p>
              <p className="text-xs text-zinc-500">{e.time}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
      }
