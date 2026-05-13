import MarketTerminal from "@/components/MarketTerminal";
import ConnectWallet from "@/components/ConnectWallet";
import PlansSection from "@/components/PlansSection";
import KYCSection from "@/components/KYCSection";
import DepositSection from "@/components/DepositSection";
import InvestorDashboard from "@/components/InvestorDashboard";
import AdminControlCenter from "@/components/AdminControlCenter";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
              Institutional Global Terminal
            </p>

            <h1 className="text-6xl lg:text-7xl font-black mt-6">
              VanderVault Holdings
            </h1>

            <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
              Secure institutional crypto infrastructure for global investors.
            </p>

          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="w-full lg:w-[320px]">
            <LanguageSwitcher />
          </div>

        </div>

      </section>

      {/* CORE SYSTEMS */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <ConnectWallet />
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-20">
        <MarketTerminal />
      </section>

      {/* INVESTOR DASHBOARD */}
      <InvestorDashboard />

      {/* ADMIN CONTROL CENTER (ADDED HERE) */}
      <AdminControlCenter />

      {/* PLANS */}
      <PlansSection />

      {/* DEPOSIT */}
      <DepositSection />

      {/* KYC */}
      <KYCSection />

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-black">
              VanderVault Holdings
            </h3>
            <p className="text-zinc-500 mt-4 text-sm">
              Institutional crypto infrastructure platform.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Compliance
            </h4>
            <p className="text-zinc-500 text-sm">
              KYC • AML • Security Systems
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Networks
            </h4>
            <p className="text-zinc-500 text-sm">
              BTC • USDT TRC20 • ERC20 • Solana
            </p>
          </div>

        </div>

      </footer>

    </main>
  );
}
