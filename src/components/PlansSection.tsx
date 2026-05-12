export default function PlansSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
          Capital Strategies
        </p>

        <h2 className="text-5xl font-black mt-4">
          Investment Portfolio Tiers
        </h2>

        <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
          Euro-denominated portfolio structures with institutional-grade allocation models.
          All performance figures are indicative and market-based only.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* STARTER */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 flex flex-col">

          <h3 className="text-amber-500 text-xs uppercase font-bold tracking-widest">
            Starter Portfolio
          </h3>

          <p className="text-3xl font-black mt-4">
            €500 – €4,999
          </p>

          <p className="text-zinc-500 text-sm mt-3">
            Conservative capital allocation strategy.
          </p>

          <div className="mt-6 text-sm text-zinc-300 space-y-2">
            <p>• Funding: BTC / USDT Wallet</p>
            <p>• Risk Level: Low</p>
            <p>• Annual Range: 4% – 8% (indicative)</p>
            <p>• Cycle: 1–3 months</p>
          </div>

          <button className="mt-8 px-5 py-3 bg-amber-500 text-black rounded-xl font-semibold">
            Select Plan
          </button>
        </div>

        {/* GROWTH */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 flex flex-col">

          <h3 className="text-amber-500 text-xs uppercase font-bold tracking-widest">
            Growth Portfolio
          </h3>

          <p className="text-3xl font-black mt-4">
            €5,000 – €24,999
          </p>

          <p className="text-zinc-500 text-sm mt-3">
            Balanced diversification strategy.
          </p>

          <div className="mt-6 text-sm text-zinc-300 space-y-2">
            <p>• Funding: BTC / USDT Wallet</p>
            <p>• Risk Level: Medium</p>
            <p>• Annual Range: 8% – 15% (indicative)</p>
            <p>• Cycle: 3–6 months</p>
          </div>

          <button className="mt-8 px-5 py-3 bg-amber-500 text-black rounded-xl font-semibold">
            Select Plan
          </button>
        </div>

        {/* ADVANCED */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 flex flex-col">

          <h3 className="text-amber-500 text-xs uppercase font-bold tracking-widest">
            Advanced Portfolio
          </h3>

          <p className="text-3xl font-black mt-4">
            €25,000 – €99,999
          </p>

          <p className="text-zinc-500 text-sm mt-3">
            Algorithm-assisted allocation model.
          </p>

          <div className="mt-6 text-sm text-zinc-300 space-y-2">
            <p>• Funding: BTC / USDT Wallet</p>
            <p>• Risk Level: Medium–High</p>
            <p>• Annual Range: 12% – 20% (indicative)</p>
            <p>• Cycle: 6–12 months</p>
          </div>

          <button className="mt-8 px-5 py-3 bg-amber-500 text-black rounded-xl font-semibold">
            Select Plan
          </button>
        </div>

        {/* INSTITUTIONAL */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 flex flex-col">

          <h3 className="text-amber-500 text-xs uppercase font-bold tracking-widest">
            Institutional Portfolio
          </h3>

          <p className="text-3xl font-black mt-4">
            €100,000+
          </p>

          <p className="text-zinc-500 text-sm mt-3">
            Custom institutional allocation strategies.
          </p>

          <div className="mt-6 text-sm text-zinc-300 space-y-2">
            <p>• Funding: BTC / USDT Wallet</p>
            <p>• Risk Level: Professional</p>
            <p>• Annual Range: 15% – 25% (indicative)</p>
            <p>• Cycle: 12+ months</p>
          </div>

          <button className="mt-8 px-5 py-3 bg-amber-500 text-black rounded-xl font-semibold">
            Select Plan
          </button>
        </div>

      </div>

    </section>
  );
}
