import MarketTerminal from "@/components/MarketTerminal";
import ConnectWallet from "@/components/ConnectWallet";
import PlansSection from "@/components/PlansSection";
import KYCSection from "@/components/KYCSection";
import DepositSection from "@/components/DepositSection";
import InvestorDashboard from "@/components/InvestorDashboard";
import AdminControlCenter from "@/components/AdminControlCenter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AuthPanel from "@/components/AuthPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

          <div>
            <h1 className="text-6xl font-black">
              Vanguard Investment Network
            </h1>

            <p className="text-zinc-400 mt-6 max-w-xl">
              Institutional digital asset platform with portfolio infrastructure.
            </p>
          </div>

          <div className="space-y-4 w-full lg:w-[350px]">
            <LanguageSwitcher />
            <AuthPanel />
          </div>

        </div>

      </section>

      {/* CORE SYSTEMS */}
      <section className="px-6 max-w-7xl mx-auto space-y-10">

        <ConnectWallet />
        <MarketTerminal />

      </section>

      {/* DASHBOARD */}
      <InvestorDashboard />

      {/* ADMIN */}
      <AdminControlCenter />

      {/* FINANCE */}
      <PlansSection />
      <DepositSection />
      <KYCSection />

    </main>
  );
}
