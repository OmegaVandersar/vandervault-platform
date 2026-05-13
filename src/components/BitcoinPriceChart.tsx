"use client";

import { useEffect, useState } from "react";

export default function BitcoinPriceChart() {
  const [prices, setPrices] = useState<number[]>([42000, 42150, 41980, 42300, 42420]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => {
        const last = prev[prev.length - 1];

        const change = (Math.random() - 0.5) * 400;
        const newPrice = Math.max(35000, last + change);

        const updated = [...prev.slice(1), Math.round(newPrice)];
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const max = Math.max(...prices);
  const min = Math.min(...prices);

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

      <h3 className="text-xl font-black mb-4">
        Bitcoin Live Price (Simulated)
      </h3>

      {/* PRICE */}
      <div className="mb-6">
        <p className="text-zinc-500 text-sm">Current BTC Price</p>
        <p className="text-3xl font-black text-amber-400">
          ${prices[prices.length - 1].toLocaleString()}
        </p>
      </div>

      {/* SIMPLE LINE VISUAL */}
      <div className="flex items-end gap-2 h-40">

        {prices.map((p, i) => {
          const height = ((p - min) / (max - min)) * 100;

          return (
            <div
              key={i}
              className="flex-1 bg-amber-500/60 rounded-md"
              style={{ height: `${height}%` }}
            />
          );
        })}

      </div>

    </div>
  );
}
