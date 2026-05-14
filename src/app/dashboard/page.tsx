"use client";

import AdvancedMarketCharts from "@/components/AdvancedMarketCharts";
import PortfolioAnalytics from "@/components/PortfolioAnalytics";
import TransactionHistory from "@/components/TransactionHistory";
import SecurityCenter from "@/components/SecurityCenter";
import SupportCenter from "@/components/SupportCenter";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* TOP HEADER */}
      <section className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Dashboard Overview
        </h1>

        <p className="text-zinc-500 mt-3">
          Institutional control center for portfolio, security and market monitoring
        </p>

        {/* QUICK STATS */}
        <div className="grid md:grid-cols-4 gap-4 mt-10">

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
            <p className="text-zinc-500 text-sm">Total Balance</p>
            <p className="text-2xl font-black text-green-400">€201,400</p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
            <p className="text-zinc-500 text-sm">Active Investments</p>
            <p className="text-2xl font-black">12</p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
            <p className="text-zinc-500 text-sm">Monthly Growth</p>
            <p className="text-2xl font-black text-green-400">+7.4%</p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
            <p className="text-zinc-500 text-sm">Security Status</p>
            <p className="text-2xl font-black text-green-400">Protected</p>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button className="bg-amber-500 text-black px-6 py-3 rounded-xl font-bold">
            Deposit
          </button>

          <button className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl">
            Withdraw
          </button>

          <button className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl">
            Invest
          </button>

          <button className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl">
            View Portfolio
          </button>

        </div>

      </section>

      {/* MARKET SECTION */}
      <AdvancedMarketCharts />

      {/* PORTFOLIO */}
      <PortfolioAnalytics />

      {/* TRANSACTIONS */}
      <TransactionHistory />

      {/* SECURITY */}
      <SecurityCenter />

      {/* SUPPORT */}
      <SupportCenter />

      {/* FOOTER */}
      <footer className="text-center py-16 text-zinc-600 text-sm">
        Institutional Investment Dashboard • Secure System Active
      </footer>

    </main>
  );
}
