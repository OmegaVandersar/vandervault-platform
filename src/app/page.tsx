import MarketTerminal from "@/components/MarketTerminal";
import ConnectWallet from "@/components/ConnectWallet";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
          Institutional Global Terminal
        </p>

        <h1 className="text-6xl font-black mt-6 leading-tight">
          VanderVault Holdings
        </h1>

        <p className="text-zinc-400 mt-6 max-w-xl">
          A structured digital asset platform built for global investors with
          institutional-grade architecture and secure financial systems.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold">
            Access Platform
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white">
            Learn More
          </button>
        </div>

      </section>

      {/* WALLET SECTION */}
      <section className="px-6 max-w-7xl mx-auto mb-10">
        <ConnectWallet />
      </section>

      {/* MARKET TERMINAL */}
      <div className="px-6">
        <MarketTerminal />
      </div>

    </main>
  );
}
