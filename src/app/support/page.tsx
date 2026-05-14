"use client";

import SupportCenter from "@/components/SupportCenter";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white md:ml-64">

      <div className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Support
        </h1>

        <p className="text-zinc-500 mt-3">
          Investor assistance and communication center
        </p>

      </div>

      <SupportCenter />

    </main>
  );
}
