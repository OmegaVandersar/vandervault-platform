import MarketTerminal from "@/components/MarketTerminal";
import ConnectWallet from "@/components/ConnectWallet";
import PlansSection from "@/components/PlansSection";
import KYCSection from "@/components/KYCSection";
import DepositSection from "@/components/DepositSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>
            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
              Institutional Global Terminal
            </p>

            <h1 className="text-6xl lg:text-7xl font-black mt-6 leading-tight">
              VanderVault Holdings
            </h1>

            <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed text-lg">
              A secure digital asset infrastructure platform engineered for
              institutional portfolio management, blockchain funding systems,
              and global investor onboarding.
            </p>
          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="w-full lg:w-[320px]">
            <LanguageSwitcher />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">

          <button className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold">
            Access Platform
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 text-white">
            Learn More
          </button>

        </div>

      </section>

      {/* WALLET CONNECTION */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <ConnectWallet />
      </section>

      {/* MARKET TERMINAL */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <MarketTerminal />
      </section>

      {/* INVESTMENT PLANS */}
      <PlansSection />

      {/* DEPOSIT SYSTEM */}
      <DepositSection />

      {/* KYC SYSTEM */}
      <KYCSection />

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

          {/* COMPANY */}
          <div>

            <h3 className="text-2xl font-black">
              VanderVault Holdings
            </h3>

            <p className="text-zinc-500 mt-4 leading-relaxed text-sm">
              Institutional-grade digital asset infrastructure and
              crypto portfolio management systems for global investors.
            </p>

          </div>

          {/* COMPLIANCE */}
          <div>

            <h4 className="text-white font-bold mb-4">
              Compliance
            </h4>

            <div className="space-y-3 text-zinc-500 text-sm">
              <p>KYC Verification System</p>
              <p>AML Monitoring Infrastructure</p>
              <p>Institutional Security Protocols</p>
              <p>Blockchain Transaction Screening</p>
            </div>

          </div>

          {/* NETWORKS */}
          <div>

            <h4 className="text-white font-bold mb-4">
              Supported Networks
            </h4>

            <div className="space-y-3 text-zinc-500 text-sm">
              <p>Bitcoin (BTC)</p>
              <p>USDT TRC20</p>
              <p>USDT ERC20</p>
              <p>USDT Solana</p>
            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-zinc-600 text-sm">
          © 2026 VanderVault Holdings. All rights reserved.
        </div>

      </footer>

    </main>
  );
      }
