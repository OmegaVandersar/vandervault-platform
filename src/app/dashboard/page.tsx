"use client";

import Sidebar from "@/components/Sidebar";

import AdvancedMarketCharts from "@/components/AdvancedMarketCharts";
import PortfolioAnalytics from "@/components/PortfolioAnalytics";
import TransactionHistory from "@/components/TransactionHistory";
import SecurityCenter from "@/components/SecurityCenter";
import SupportCenter from "@/components/SupportCenter";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT WRAPPER */}
      <div className="md:ml-64">

        {/* TOP SECTION */}
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

        </section>

        {/* MODULES */}
        <AdvancedMarketCharts />
        <PortfolioAnalytics />
        <TransactionHistory />
        <SecurityCenter />
        <SupportCenter />

        {/* FOOTER */}
        <footer className="text-center py-16 text-zinc-600 text-sm">
          Institutional Investment Dashboard • Secure System Active
        </footer>

      </div>
    </main>
  );
}
