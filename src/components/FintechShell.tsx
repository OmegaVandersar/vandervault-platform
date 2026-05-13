"use client";

import { ReactNode } from "react";

export default function FintechShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* TOP BAR */}
        <div className="w-full border-b border-white/10 backdrop-blur-xl bg-black/60 px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <p className="text-sm font-bold text-zinc-300">
              MARKET SYSTEM ONLINE
            </p>
          </div>

          <div className="text-xs text-zinc-500">
            Institutional Dashboard Interface
          </div>

        </div>

        {/* PAGE CONTENT */}
        <div className="p-6 md:p-10">
          {children}
        </div>

      </div>
    </div>
  );
}
