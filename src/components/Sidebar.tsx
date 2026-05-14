"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const items = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Markets", path: "/markets" },
    { name: "Transactions", path: "/transactions" },
    { name: "Wallet", path: "/wallet" },
    { name: "Security", path: "/security" },
    { name: "Support", path: "/support" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-black border-r border-white/10 p-6">

      {/* BRAND */}
      <div className="mb-10">
        <h1 className="text-2xl font-black text-white">
          Omega Finance
        </h1>

        <p className="text-xs text-zinc-500 mt-2">
          Institutional Dashboard
        </p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col gap-3">

        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className="text-left px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition"
          >
            {item.name}
          </button>
        ))}

      </nav>

      {/* FOOTER STATUS */}
      <div className="mt-auto pt-6 border-t border-white/10">

        <p className="text-green-400 text-sm font-bold">
          System Online
        </p>

        <p className="text-xs text-zinc-500 mt-1">
          All services active
        </p>

      </div>

    </aside>
  );
}
