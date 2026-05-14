"use client";

import AdvancedMarketCharts from "@/components/AdvancedMarketCharts";

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-black text-white md:ml-64">

      <div className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Markets
        </h1>

        <p className="text-zinc-500 mt-3">
          Live digital asset monitoring
        </p>

      </div>

      <AdvancedMarketCharts />

    </main>
  );
}
