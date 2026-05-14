"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AdvancedMarketCharts from "@/components/AdvancedMarketCharts";
import PortfolioAnalytics from "@/components/PortfolioAnalytics";
import TransactionHistory from "@/components/TransactionHistory";
import SecurityCenter from "@/components/SecurityCenter";
import SupportCenter from "@/components/SupportCenter";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      router.push("/login");
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Dashboard Overview
        </h1>

        <p className="text-zinc-500 mt-3">
          Institutional control center for portfolio, security and market monitoring
        </p>

      </div>

      <AdvancedMarketCharts />
      <PortfolioAnalytics />
      <TransactionHistory />
      <SecurityCenter />
      <SupportCenter />

    </main>
  );
}
