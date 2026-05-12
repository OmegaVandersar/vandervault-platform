import MarketTerminal from "@/components/MarketTerminal";
import ConnectWallet from "@/components/ConnectWallet";
import PlansSection from "@/components/PlansSection";
import KYCSection from "@/components/KYCSection";

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

        <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
          A structured digital asset infrastructure platform designed for
          institutional portfolio management, crypto asset operations,
          and global investor onboarding.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold">
            Access Platform
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white">
            Learn More
          </button>

        </div>

      </section>

      {/* WALLET CONNECT */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <ConnectWallet />
      </section>

      {/* MARKET TERMINAL */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <MarketTerminal />
      </section>

      {/* INVESTMENT PLANS */}
      <PlansSection />

      {/* KYC VERIFICATION */}
      <KYCSection />

    </main>
  );
}
