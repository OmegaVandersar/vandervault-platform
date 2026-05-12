import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            VanderVault
          </h1>

          <p className="text-xs text-zinc-500 uppercase tracking-[0.3em]">
            Global Terminal
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

          <button className="hover:text-white transition">
            Dashboard
          </button>

          <button className="hover:text-white transition">
            Security
          </button>

          <button className="hover:text-white transition">
            Markets
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <LanguageSwitcher />

          <button className="px-5 py-2 rounded-xl bg-amber-500 text-black font-semibold hover:opacity-90 transition">
            Access Platform
          </button>

        </div>

      </div>

    </nav>
  );
}
