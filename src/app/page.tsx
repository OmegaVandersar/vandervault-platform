import PlansSection from "@/components/PlansSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center">

        <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold">
          Institutional Digital Investment Platform
        </p>

        <h1 className="text-6xl font-black mt-6 leading-tight">
          Secure Wealth Infrastructure
          <br />
          For Global Investors
        </h1>

        <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">
          Advanced portfolio allocation, institutional-grade analytics,
          and secure crypto funding systems for modern capital growth.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button className="bg-amber-500 text-black px-8 py-4 rounded-2xl font-bold">
            Start Investing
          </button>

          <button className="border border-white/10 px-8 py-4 rounded-2xl">
            View Dashboard
          </button>

        </div>

      </section>

      {/* PLANS */}
      <PlansSection />

    </main>
  );
}
