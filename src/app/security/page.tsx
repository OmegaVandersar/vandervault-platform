"use client";

import SecurityCenter from "@/components/SecurityCenter";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black text-white md:ml-64">

      <div className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Security
        </h1>

        <p className="text-zinc-500 mt-3">
          Account protection and login monitoring
        </p>

      </div>

      <SecurityCenter />

    </main>
  );
}
