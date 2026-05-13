"use client";

export default function DepositSection() {
  const wallets = [
    {
      name: "Bitcoin (BTC)",
      network: "Bitcoin Network",
      address: "bc1qz284st50vmnczc3xc44zwm562p5nq44hqrgc52",
    },
    {
      name: "USDT (TRC20)",
      network: "Tron Network",
      address: "TBx9U7SXBffzCXr9hk7CfF2NRJzLAAVi3v",
    },
    {
      name: "USDT (ERC20)",
      network: "Ethereum Network",
      address: "0x9f49fc635086921124970bac91e6b14677126337",
    },
    {
      name: "USDT (SOL)",
      network: "Solana Network",
      address: "Gu4mnptk4p4AAJNrpMFAvd5vdYbRmkwoiKuP1qK4g4rV",
    },
  ];

  const transactions = [
    {
      type: "Deposit",
      asset: "BTC",
      amount: "0.45 BTC",
      status: "Confirmed",
    },
    {
      type: "Deposit",
      asset: "USDT",
      amount: "5,000 USDT",
      status: "Pending",
    },
    {
      type: "Withdrawal",
      asset: "ETH",
      amount: "1.2 ETH",
      status: "Processing",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black">Wallet & Deposit Center</h2>
        <p className="text-zinc-500 mt-2">
          Multi-chain asset deposit interface (UI simulation)
        </p>
      </div>

      {/* WALLET ADDRESSES */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">

        {wallets.map((w, i) => (
          <div
            key={i}
            className="bg-zinc-950 border border-white/10 rounded-2xl p-6"
          >

            <h3 className="text-xl font-black">{w.name}</h3>
            <p className="text-sm text-zinc-500 mt-1">{w.network}</p>

            <div className="mt-4 bg-black border border-white/10 p-3 rounded-xl text-sm text-green-400 break-all">
              {w.address}
            </div>

          </div>
        ))}

      </div>

      {/* TRANSACTIONS */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          Recent Transactions
        </h3>

        <div className="space-y-3">

          {transactions.map((t, i) => (
            <div
              key={i}
              className="flex justify-between border border-white/10 p-4 rounded-xl"
            >

              <div>
                <p className="font-bold">{t.type}</p>
                <p className="text-sm text-zinc-500">{t.asset}</p>
              </div>

              <div className="text-right">
                <p className="font-bold">{t.amount}</p>
                <p className="text-xs text-amber-400">{t.status}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
