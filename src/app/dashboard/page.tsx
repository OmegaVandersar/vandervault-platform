import DashboardLayout from "@/components/DashboardLayout";

import ProtectedRoute from "@/features/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>

        <div>
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
            Overview
          </p>

          <h1 className="text-5xl font-black mt-4">
            Investor Dashboard
          </h1>

          <p className="text-zinc-500 mt-4 max-w-2xl">
            Monitor platform activity, portfolio performance,
            analytics systems, and account security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm">
              Portfolio Balance
            </p>

            <h2 className="text-3xl font-black mt-4">
              €0.00
            </h2>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm">
              Security Score
            </p>

            <h2 className="text-3xl font-black mt-4">
              82%
            </h2>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-500 text-sm">
              Active Sessions
            </p>

            <h2 className="text-3xl font-black mt-4">
              1 Device
            </h2>
          </div>

        </div>

      </DashboardLayout>
    </ProtectedRoute>
  );
}
