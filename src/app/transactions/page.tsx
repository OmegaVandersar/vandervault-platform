"use client";

import TransactionHistory from "@/components/TransactionHistory";

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-black text-white md:ml-64">

      <div className="px-6 py-10 max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          Transactions
        </h1>

        <p className="text-zinc-500 mt-3">
          Deposit and withdrawal history
        </p>

      </div>

      <TransactionHistory />

    </main>
  );
}
