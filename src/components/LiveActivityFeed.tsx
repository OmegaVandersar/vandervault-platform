"use client";

import { useEffect, useState } from "react";

type Activity = {
  id: number;
  message: string;
  time: string;
};

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const templates = [
    "Anna from Canada deposited €3,500",
    "Crypto withdrawal of €1,200 processed to BTC wallet",
    "KYC verification completed (Germany)",
    "Investor from USA funded €4,000 portfolio",
    "System security scan completed successfully",
    "Portfolio rebalanced automatically for user #4421",
    "Withdrawal request approved: €2,750",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        templates[Math.floor(Math.random() * templates.length)];

      const newActivity: Activity = {
        id: Date.now(),
        message: random,
        time: new Date().toLocaleTimeString(),
      };

      setActivities((prev) => [newActivity, ...prev.slice(0, 6)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto text-white">

      <h2 className="text-3xl font-black mb-6">
        Live Global Activity
      </h2>

      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 space-y-4">

        {activities.length === 0 && (
          <p className="text-zinc-500">
            Waiting for live network activity...
          </p>
        )}

        {activities.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-white/5 pb-3"
          >
            <p className="text-sm text-zinc-200">
              {item.message}
            </p>

            <span className="text-xs text-zinc-500">
              {item.time}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}
