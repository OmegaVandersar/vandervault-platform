import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-32">
        
        <div className="max-w-3xl">
          <p className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold mb-6">
            Institutional Infrastructure
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            Global Digital Asset Terminal
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Multi-region fintech infrastructure platform with advanced onboarding,
            security architecture, analytics systems, and institutional-grade interface design.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-8 py-4 rounded-2xl bg-amber-500 text-black font-bold">
              Open Dashboard
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 text-white">
              Explore Platform
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}
