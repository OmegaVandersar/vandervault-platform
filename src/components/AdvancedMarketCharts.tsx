"use client";

import { useEffect, useState } from "react";

type MarketAsset = {
  name: string;
  symbol: string;
  price: number;
  change: number;
};

export default function AdvancedMarketCharts() {
  const [assets, setAssets] = useState<MarketAsset[]>([
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 68420,
      change: 2.4,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 3420,
      change: 1.7,
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: 168,
      change: 4.1,
    },
    {
      name: "BNB",
      symbol: "BNB",
      price: 612,
      change: 1.2,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prev) =>
        prev.map((asset) => {
          const randomMove =
            (Math.random() - 0.5) * 120;

          const randomPercent =
            (Math.random() - 0.5) * 2;

          return {
            ...asset,
            price: Math.max(
              1,
              Math.round(asset.price + randomMove)
            ),
            change: Number(
              (asset.change + randomPercent).toFixed(2)
            ),
          };
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Advanced Market Charts
        </h2>

        <p className="text-zinc-500 mt-2">
          Institutional digital asset monitoring
        </p>
      </div>

      {/* MARKET OVERVIEW */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Market Trend
          </p>

          <p className="text-2xl font-black text-green-400">
            Bullish
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            BTC Dominance
          </p>

          <p className="text-2xl font-black">
            54.8%
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Trading Volume
          </p>

          <
