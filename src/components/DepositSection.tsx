"use client";

import { useState } from "react";

export default function DepositSection() {
  const [copied, setCopied] = useState("");

  const wallets = [
    {
      title: "Bitcoin Deposit",
      network: "BTC Network",
      address:
        "bc1qz284st50vmnczc3xc44zwm562p5nq44hqrgc52",
      color:
        "bg-amber-500/10 text-amber-500",
    },

    {
      title: "USDT Deposit",
      network: "TRC20 Network",
      address:
        "TBx9U7SXBffzCXr9hk7CfF2NRJzLAAVi3v",
      color:
        "bg-green-500/10 text-green-400",
    },

    {
      title: "USDT Deposit",
      network: "ERC20 Ethereum",
      address:
        "0x9f49fc635086921124970bac91e6b14677126337",
      color:
        "bg-blue-500/10 text-blue-400",
    },

    {
      title: "USDT Deposit",
      network: "Solana Network",
      address:
        "Gu4mnptk4p4AAJNrpMFAvd5vdYbRmkwoiKuP1qK4g4rV",
      color:
        "bg-purple-500/10 text-purple-400",
    },
  ];

  const copyToClipboard = async (
    text: string,
    label: string
  ) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(label);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="text-center mb-16">

        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
          Funding Infrastructure
        </p>

        <h2 className="text-5xl font-black mt-4">
          Crypto Deposit Terminal
        </h2>

        <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
          Secure institutional-grade blockchain funding system supporting
          BTC and multi-network USDT transfers.
        </p>

      </div>

      {/* WALLET GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {wallets.map((wallet, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-white/10 rounded-3xl p-8"
          >

            <div className="flex items-center justify-between mb-6">

              <h3 className="text-2xl font-black">
                {wallet.title}
              </h3>

              <div
                className={`${wallet.color} px-3 py-1 rounded-full text-xs font-bold uppercase`}
              >
                {wallet.network}
              </div>

            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-4 break-all text-sm text-zinc-300">
              {wallet.address}
            </div>

            <button
              onClick={() =>
                copyToClipboard(
                  wallet.address,
                  wallet.network
                )
              }
              className="w-full mt-5 py-3 rounded-2xl bg-amber-500 text-black font-bold"
            >
              {copied === wallet.network
                ? "Address Copied"
                : "Copy Wallet Address"}
            </button>

            <div className="mt-6 border border-white/10 rounded-2xl p-4">

              <p className="text-sm text-zinc-400">
                Minimum Deposit
              </p>

              <p className="text-xl font-black mt-1">
                €500 Equivalent
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* STATUS PANEL */}
      <div className="mt-10 bg-zinc-950 border border-white/10 rounded-3xl p-8">

        <h3 className="text-2xl font-black mb-6">
          Transaction Processing
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-white/10 rounded-2xl p-5">

            <p className="text-zinc-500 text-sm">
              Blockchain Confirmations
            </p>

            <p className="text-xl font-black mt-2">
              Pending
            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-5">

            <p className="text-zinc-500 text-sm">
              Compliance Review
            </p>

            <p className="text-xl font-black mt-2">
              Awaiting
            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-5">

            <p className="text-zinc-500 text-sm">
              Wallet Security
            </p>

            <p className="text-xl font-black mt-2 text-green-400">
              Active
            </p>

          </div>

        </div>

      </div>

    </section>
  );
    }
