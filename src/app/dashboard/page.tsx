"use client";

import InvestorDashboard from "@/components/InvestorDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["investor", "admin"]}>
      <main className="min-h-screen bg-black text-white">
        <InvestorDashboard />
      </main>
    </ProtectedRoute>
  );
}
