import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-zinc-950 border-r border-white/10 p-6 hidden md:flex flex-col">

        <div className="mb-12">
          <h1 className="text-2xl font-black">
            VanderVault
          </h1>

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mt-1">
            Institutional Terminal
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">

          <button className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition">
            Dashboard
          </button>

          <button className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition">
            Portfolio
          </button>

          <button className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition">
            Markets
          </button>

          <button className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition">
            Analytics
          </button>

          <button className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition">
            Security
          </button>

          <button className="text-left px-4 py-3 rounded-xl hover:bg-white/5 transition">
            Settings
          </button>

        </nav>

        <div className="mt-auto pt-10">
          <div className="bg-amber-500 text-black rounded-2xl p-4">
            <p className="font-bold text-sm">
              Security Status
            </p>

            <p className="text-xs mt-1">
              2FA Recommended
            </p>
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>

    </div>
  );
}
