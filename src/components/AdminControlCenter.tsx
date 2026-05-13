"use client";

import { useEffect, useRef, useState } from "react";

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

  const users = ["Satoshi", "CryptoQueen", "MinerX", "BlockNode", "TraderEU", "AlphaNode"];

  const activityPool = [
    { text: "BTC deposit confirmed", weight: 4 },
    { text: "USDT transfer processed", weight: 4 },
    { text: "New investor registration", weight: 3 },
    { text: "KYC verification completed", weight: 2 },
    { text: "Withdrawal request submitted", weight: 3 },
  ];

  const chatPool = [
    "Bitcoin is consolidating nicely 📊",
    "Market looking bullish 🚀",
    "Waiting for breakout above resistance",
    "Long-term accumulation phase continues",
    "Volatility expected this week",
  ];

  const pickWeighted = () => {
    const total = activityPool.reduce((a, b) => a + b.weight, 0);
    let random = Math.random() * total;

    for (const item of activityPool) {
      if (random < item.weight) return item.text;
      random -= item.weight;
    }

    return activityPool[0].text;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // EVENT GENERATION (SMART RANDOMIZED)
      const event: EventItem = {
        id: Math.random().toString(),
        message: pickWeighted(),
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [event, ...prev.slice(0, 12)]);

      // CHAT GENERATION (VARIED MESSAGES)
      const chatMsg: ChatItem = {
        id: Math.random().toString(),
        user: users[Math.floor(Math.random() * users.length)],
        message: chatPool[Math.floor(Math.random() * chatPool.length)],
      };

      setChat((prev) => [chatMsg, ...prev.slice(0, 10)]);

      // SOUND ONLY IF ENABLED
      if (soundEnabled && Math.random() > 0.6) {
        const audio = new Audio(
          "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
        );

        audio.play().catch(() => {});
      }
    }, Math.random() * 4000 + 4000); // 4–8 seconds dynamic interval

    return () => clearInterval(interval);
  }, [soundEnabled]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">Admin Control Center</h2>
        <p className="text-zinc-500 mt-2">
          Real-time simulation engine (advanced market behavior)
        </p>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="mt-4 px-4 py-2 bg-amber-500 text-black font-bold rounded-xl"
        >
          {soundEnabled ? "Disable Alerts" : "Enable Alerts"}
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

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LIVE ACTIVITY */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-4">
            Live Activity Engine
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
            Bitcoin Discussion Stream
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
