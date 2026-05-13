import AdminSoundAlert from "./AdminSoundAlert";

export default function AdminControlCenter() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-14">

        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
          Administrative Panel
        </p>

        <h2 className="text-5xl font-black mt-4">
          Control Center
        </h2>

        <p className="text-zinc-500 mt-4 max-w-2xl">
          Live monitoring system for investor activity, compliance checks,
          deposits, withdrawals, and KYC verification.
        </p>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* ALERT SYSTEM */}
        <AdminSoundAlert />

        {/* QUICK STATS */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-6">
            Live System Status
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between border border-white/10 p-4 rounded-2xl">
              <p>Active Investors</p>
              <p className="font-black">1,284</p>
            </div>

            <div className="flex justify-between border border-white/10 p-4 rounded-2xl">
              <p>Pending KYC</p>
              <p className="font-black text-yellow-400">47</p>
            </div>

            <div className="flex justify-between border border-white/10 p-4 rounded-2xl">
              <p>Pending Deposits</p>
              <p className="font-black text-amber-500">23</p>
            </div>

            <div className="flex justify-between border border-white/10 p-4 rounded-2xl">
              <p>System Status</p>
              <p className="font-black text-green-400">ONLINE</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
