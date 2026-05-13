import MarketTerminal from "@/components/MarketTerminal";
import ConnectWallet from "@/components/ConnectWallet";
import PlansSection from "@/components/PlansSection";
import KYCSection from "@/components/KYCSection";
import DepositSection from "@/components/DepositSection";
import InvestorDashboard from "@/components/InvestorDashboard";
import AdminControlCenter from "@/components/AdminControlCenter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import RoleSwitch from "@/components/RoleSwitch";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* LEFT */}
          <div>

            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
              Institutional Crypto Infrastructure
            </p>

            <h1 className="text-6xl lg:text-7xl font-black mt-6">
              Vanguard Investment Network
            </h1>

            <p className="text-zinc-400 mt-6 max-w-2xl text-lg leading-relaxed">
              A multi-asset digital investment ecosystem built for global investors,
              portfolio management, and institutional-grade financial operations.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-6 py-3 rounded-xl bg-amber-500 text-black font-bold">
                Enter Platform
              </button>

              <button className="px-6 py-3 rounded-xl border border-white/20">
                Documentation
              </button>

            </div>

          </div>

          {/* RIGHT CONTROLS */}
          <div className="w-full lg:w-[340px] space-y-4">

            <LanguageSwitcher />
            <RoleSwitch />

          </div>

        </div>

      </section>

      {/* CORE SYSTEM */}
      <section className="px-6 max-w-7xl mx-auto space-y-10">

        <ConnectWallet />
        <MarketTerminal />

      </section>

      {/* DASHBOARD SYSTEM */}
      <section className="mt-20">
        <InvestorDashboard />
      </section>

      {/* ADMIN SYSTEM */}
      <section className="mt-20">
        <AdminControlCenter />
      </section>

      {/* INVESTMENT SYSTEM */}
      <section className="mt-20">
        <PlansSection />
      </section>

      {/* FINANCIAL OPERATIONS */}
      <section className="px-6 max-w-7xl mx-auto mt-20 space-y-10">

        <DepositSection />
        <KYCSection />

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-black">
              Vanguard Investment Network
            </h3>
            <p className="text-zinc-500 mt-4 text-sm">
              Institutional crypto infrastructure for global digital asset management.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Compliance</h4>
            <p className="text-zinc-500 text-sm">
              KYC • AML • Risk Monitoring • Security Systems
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Supported Assets</h4>
            <p className="text-zinc-500 text-sm">
              BTC • USDT TRC20 • ERC20 • Solana
            </p>
          </div>

        </div>

        <div className="text-center text-zinc-600 text-sm border-t border-white/10 py-6">
          © 2026 Vanguard Investment Network. All rights reserved.
        </div>

      </footer>

    </main>
  );
}
