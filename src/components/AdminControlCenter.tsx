"use client";

import { useEffect, useState } from "react";

type EventItem = {
  id: string;
  message: string;
  time: string;
};

type ChatItem = {
  id: string;
  user: string;
  message: string;
};

export default function AdminControlCenter() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [chat, setChat] = useState<ChatItem[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const users = ["Satoshi", "CryptoQueen", "MinerX", "BlockNode", "TraderEU"];

  useEffect(() => {
    const pool = [
      "New BTC deposit detected",
      "KYC verification completed",
      "Withdrawal request submitted",
      "USDT transfer received",
      "New investor registered (EU region)",
    ];

    const interval = setInterval(() => {
      const event: EventItem = {
        id: Math.random().toString(),
        message: pool[Math.floor(Math.random() * pool.length)],
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [event, ...prev.slice(0, 9)]);

      const chatMsg: ChatItem = {
        id: Math.random().toString(),
        user: users[Math.floor(Math.random() * users.length)],
        message: "Bitcoin market discussion update 🚀",
      };

      setChat((prev) => [chatMsg, ...prev.slice(0, 8)]);

      if (soundEnabled) {
        const audio = new Audio(
          "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
        );

        audio.play().catch(() => {});
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [soundEnabled]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">Admin Control Center</h2>
        <p className="text-zinc-500 mt-2">
          Unified monitoring system (activity + chat + alerts)
        </p>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="mt-4 px-4 py-2 bg-amber-500 text-black font-bold rounded-xl"
        >
          {soundEnabled ? "Disable Sound Alerts" : "Enable Sound Alerts"}
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
          <p className="text-sm text-zinc-500">System Status</p>
          <p className="text-2xl font-black text-green-400">ONLINE</p>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LIVE ACTIVITY */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-4">
            Live Activity Feed
          </h3>

          <div className="space-y-3 max-h-80 overflow-auto">

            {events.map((e) => (
              <div
                key={e.id}
                className="flex justify-between border border-white/10 p-3 rounded-xl"
              >
                <p>{e.message}</p>
                <p className="text-xs text-zinc-500">{e.time}</p>
              </div>
            ))}

          </div>

        </div>

        {/* LIVE CHAT */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-4">
            Bitcoin Live Chat
          </h3>

          <div className="space-y-3 max-h-80 overflow-auto">

            {chat.map((c) => (
              <div key={c.id} className="border border-white/10 p-3 rounded-xl">

                <p className="text-amber-400 text-sm font-bold">
                  {c.user}
                </p>

                <p>{c.message}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
