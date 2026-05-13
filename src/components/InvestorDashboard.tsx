"use client";

import { useState } from "react";

type Asset = {
  symbol: string;
  balance: number;
  value: number;
};

export default function InvestorDashboard() {
  const [assets] = useState<Asset[]>([
    { symbol: "BTC", balance: 0.42, value: 18200 },
    { symbol: "USDT", balance: 5400, value: 5400 },
    { symbol: "ETH", balance: 2.1, value: 6800 },
  ]);

  const total = assets.reduce((sum, a) => sum + a.value, 0);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">Investor Dashboard</h2>
        <p className="text-zinc-500 mt-2">
          Portfolio overview and asset performance
        </p>
      </div>

      {/* TOTAL BALANCE */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 mb-10">
        <p className="text-zinc-500 text-sm">Total Portfolio Value</p>
        <p className="text-4xl font-black text-amber-400">
          €{total.toLocaleString()}
        </p>
      </div>

      {/* ASSETS */}
      <div className="grid md:grid-cols-3 gap-6">

        {assets.map((asset) => (
          <div
            key={asset.symbol}
            className="bg-zinc-950 border border-white/10 rounded-2xl p-6"
          >

            <p className="text-sm text-zinc-500">Asset</p>
            <p className="text-2xl font-black">{asset.symbol}</p>

            <p className="mt-4 text-sm text-zinc-500">Balance</p>
            <p className="text-xl font-bold">{asset.balance}</p>

            <p className="mt-4 text-sm text-zinc-500">Value</p>
            <p className="text-xl font-bold text-green-400">
              €{asset.value.toLocaleString()}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
