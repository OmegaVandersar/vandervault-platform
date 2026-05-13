"use client";

import { useEffect, useState } from "react";

type EngineEvent = {
  id: string;
  message: string;
  category: string;
  time: string;
};

export default function RealtimeEngine() {
  const [events, setEvents] = useState<EngineEvent[]>([]);

  const eventPool = [
    {
      category: "Deposits",
      message: "BTC deposit confirmed",
    },
    {
      category: "Withdrawals",
      message: "Withdrawal request processing",
    },
    {
      category: "Security",
      message: "KYC verification completed",
    },
    {
      category: "Market",
      message: "Bitcoin volatility increasing",
    },
    {
      category: "Users",
      message: "New investor registered",
    },
    {
      category: "System",
      message: "Realtime synchronization active",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        eventPool[Math.floor(Math.random() * eventPool.length)];

      const newEvent: EngineEvent = {
        id: Math.random().toString(),
        message: random.message,
        category: random.category,
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 9)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Realtime Market Engine
        </h2>

        <p className="text-zinc-500 mt-2">
          Global synchronized activity system
        </p>
      </div>

      {/* ENGINE STATUS */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Engine Status
          </p>

          <p className="text-2xl font-black text-green-400">
            ACTIVE
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Event Frequency
          </p>

          <p className="text-2xl font-black">
            4s
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Connected Modules
          </p>

          <p className="text-2xl font-black">
            12
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            System Stability
          </p>

          <p className="text-2xl font-black text-green-400">
            99.9%
          </p>
        </div>

      </div>

      {/* LIVE ENGINE FEED */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          Engine Activity Feed
        </h3>

        <div className="space-y-3 max-h-96 overflow-auto">

          {events.map((event) => (
            <div
              key={event.id}
              className="border border-white/10 rounded-xl p-4 flex justify-between items-center"
            >

              <div>
                <p className="font-bold">
                  {event.message}
                </p>

                <p className="text-xs text-zinc-500 mt-1">
                  {event.category}
                </p>
              </div>

              <p className="text-xs text-zinc-500">
                {event.time}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
    }
