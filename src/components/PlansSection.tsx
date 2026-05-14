export default function PlansSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-amber-500 uppercase tracking-[0.25em] text-sm font-semibold">
          CAPITAL STRATEGIES
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Investment Portfolio Tiers
        </h2>

        <p className="text-zinc-400 mt-5 max-w-2xl mx-auto text-lg">
          Euro-denominated portfolios designed with institutional-grade asset allocation models. 
          All performance figures are indicative, net of fees, and based on historical modelling.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* STARTER */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col">
          <h3 className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Starter Portfolio
          </h3>

          <p className="text-4xl font-bold mt-5">€500 – €4,999</p>
          
          <p className="text-zinc-400 mt-3">
            Conservative strategy focused on capital preservation and stable returns.
          </p>

          {/* Returns */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-5">EXPECTED RETURNS</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">0.8% – 1.4%</p>
                <p className="text-[10px] text-zinc-500 mt-1">MONTHLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">2.5% – 4.2%</p>
                <p className="text-[10px] text-zinc-500 mt-1">QUARTERLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">4% – 8%</p>
                <p className="text-[10px] text-zinc-500 mt-1">ANNUALLY</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-sm space-y-3 text-zinc-300">
            <p>• BTC / USDT Funding</p>
            <p>• Risk Level: Low</p>
            <p>• Investment Cycle: 1–3 months</p>
          </div>

          <button className="mt-auto w-full py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors text-black font-semibold rounded-2xl mt-10">
            Select Starter Plan
          </button>
        </div>

        {/* GROWTH */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col relative">
          <div className="absolute -top-3 right-6 bg-amber-500 text-black text-xs font-bold px-5 py-1.5 rounded-full">
            MOST POPULAR
          </div>

          <h3 className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Growth Portfolio
          </h3>

          <p className="text-4xl font-bold mt-5">€5,000 – €24,999</p>
          
          <p className="text-zinc-400 mt-3">
            Balanced portfolio offering diversified growth opportunities.
          </p>

          {/* Returns */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-5">EXPECTED RETURNS</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">1.2% – 2.1%</p>
                <p className="text-[10px] text-zinc-500 mt-1">MONTHLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">3.8% – 6.5%</p>
                <p className="text-[10px] text-zinc-500 mt-1">QUARTERLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">8% – 15%</p>
                <p className="text-[10px] text-zinc-500 mt-1">ANNUALLY</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-sm space-y-3 text-zinc-300">
            <p>• BTC / USDT Funding</p>
            <p>• Risk Level: Medium</p>
            <p>• Investment Cycle: 3–6 months</p>
          </div>

          <button className="mt-auto w-full py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors text-black font-semibold rounded-2xl mt-10">
            Select Growth Plan
          </button>
        </div>

        {/* ADVANCED */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col">
          <h3 className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Advanced Portfolio
          </h3>

          <p className="text-4xl font-bold mt-5">€25,000 – €99,999</p>
          
          <p className="text-zinc-400 mt-3">
            Dynamic allocation using algorithmic strategies for enhanced returns.
          </p>

          {/* Returns */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-5">EXPECTED RETURNS</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">1.6% – 2.8%</p>
                <p className="text-[10px] text-zinc-500 mt-1">MONTHLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">5.0% – 8.5%</p>
                <p className="text-[10px] text-zinc-500 mt-1">QUARTERLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">12% – 20%</p>
                <p className="text-[10px] text-zinc-500 mt-1">ANNUALLY</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-sm space-y-3 text-zinc-300">
            <p>• BTC / USDT Funding</p>
            <p>• Risk Level: Medium–High</p>
            <p>• Investment Cycle: 6–12 months</p>
          </div>

          <button className="mt-auto w-full py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors text-black font-semibold rounded-2xl mt-10">
            Select Advanced Plan
          </button>
        </div>

        {/* INSTITUTIONAL */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 flex flex-col">
          <h3 className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Institutional Portfolio
          </h3>

          <p className="text-4xl font-bold mt-5">€100,000+</p>
          
          <p className="text-zinc-400 mt-3">
            Tailored strategies with full institutional allocation and risk management.
          </p>

          {/* Returns */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-5">EXPECTED RETURNS</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">2.0% – 3.5%</p>
                <p className="text-[10px] text-zinc-500 mt-1">MONTHLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">6.5% – 11.0%</p>
                <p className="text-[10px] text-zinc-500 mt-1">QUARTERLY</p>
              </div>
              <div>
                <p className="text-emerald-400 text-2xl font-semibold">15% – 25%</p>
                <p className="text-[10px] text-zinc-500 mt-1">ANNUALLY</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-sm space-y-3 text-zinc-300">
            <p>• BTC / USDT Funding</p>
            <p>• Risk Level: Professional</p>
            <p>• Investment Cycle: 12+ months</p>
          </div>

          <button className="mt-auto w-full py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors text-black font-semibold rounded-2xl mt-10">
            Contact Us
          </button>
        </div>

      </div>

      <p className="text-center text-zinc-500 text-sm mt-16 max-w-lg mx-auto">
        All returns are estimates and not guaranteed. Actual performance may vary significantly. 
        Investing involves risk, including possible loss of principal.
      </p>
    </section>
  );
}
