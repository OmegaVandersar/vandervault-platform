"use client";

import { useState } from "react";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Dashboard",
    "Portfolio",
    "Analytics",
    "Security",
    "Wallet",
    "KYC",
    "Transactions",
    "Settings",
  ];

  return (
    <>
      {/* TOP MOBILE BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">

        <div className="flex items-center justify-between px-4 py-4">

          <div>
            <h1 className="text-white font-black text-lg">
              Omega Finance
            </h1>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl">

          <div className="pt-24 px-6">

            <div className="space-y-4">

              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left bg-zinc-950 border border-white/10 rounded-2xl p-4 text-white font-bold hover:border-amber-500/40 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </button>
              ))}

            </div>

            {/* FOOTER */}
            <div className="mt-10 border-t border-white/10 pt-6">

              <p className="text-zinc-500 text-sm">
                Institutional Investor Platform
              </p>

              <p className="text-green-400 text-sm mt-2">
                System Status: Online
              </p>

            </div>

          </div>

        </div>
      )}
    </>
  );
}
