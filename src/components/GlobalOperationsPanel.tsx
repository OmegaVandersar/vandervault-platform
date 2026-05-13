"use client";

import { useEffect, useState } from "react";

type Activity = {
  id: string;
  country: string;
  type: string;
  amount?: string;
  time: string;
};

export default function GlobalOperationsPanel() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const countries = [
    "Germany",
    "Canada",
    "Switzerland",
    "United Kingdom",
    "Australia",
    "Netherlands",
    "France",
    "Sweden",
  ];

  const activityPool = [
    {
      type: "KYC Verification Approved",
    },
    {
      type: "BTC Deposit Confirmed",
      amount: "€4,200",
    },
    {
      type: "USDT Deposit Received",
      amount: "€8,500",
    },
    {
      type: "Withdrawal Processing",
      amount: "€2,300",
    },
    {
      type: "Portfolio Activated",
    },
    {
      type: "Advanced Verification Completed",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const country =
        countries[Math.floor(Math.random() * countries.length)];

      const randomActivity =
        activityPool[
          Math.floor(Math.random() * activityPool.length)
        ];

      const newActivity: Activity = {
        id: Math.random().toString(),
        country,
        type: randomActivity.type,
        amount: randomActivity.amount,
        time: new Date().toLocaleTimeString(),
      };

      setActivities((prev) => [
        newActivity,
        ...prev.slice(0, 14),
      ]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Global Operations Monitor
        </h2>

        <p className="text-zinc-500 mt-2">
          Live international platform activity stream
        </p>
      </div>

      {/* STATUS CARDS */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Active Regions
          </p>

          <p className="text-2xl font-black">
            28
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            KYC Queue
          </p>

          <p className="text-2xl font-black text-yellow-400">
            42
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Deposits Today
          </p>

          <p className="text-2xl font-black text-green-400">
            €184K
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Withdrawals
          </p>

          <p className="text-2xl font-black text-blue-400">
            €91K
          </p>
        </div>

      </div>

      {/* LIVE ACTIVITY */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          International Activity Feed
        </h3>

        <div className="space-y-3 max-h-[500px] overflow-auto">

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="border border-white/10 rounded-xl p-4 flex justify-between items-center"
            >

              <div>
                <p className="font-bold">
                  {activity.type}
                </p>

                <p className="text-sm text-zinc-500 mt-1">
                  {activity.country}
                </p>
              </div>

              <div className="text-right">
                {activity.amount && (
                  <p className="text-green-400 font-bold">
                    {activity.amount}
                  </p>
                )}

                <p className="text-xs text-zinc-500 mt-1">
                  {activity.time}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
        }
