"use client";

import PortfolioAnalytics from "@/components/PortfolioAnalytics";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white md:ml-64">

      <div className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Portfolio
        </h1>

        <p className="text-zinc-500 mt-3">
          Asset allocation and performance overview
        </p>

      </div>

      <PortfolioAnalytics />

    </main>
  );
}
