export default function InvestorDashboard() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">

        <div>

          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
            Investor Dashboard
          </p>

          <h2 className="text-5xl font-black mt-4">
            Portfolio Overview
          </h2>

          <p className="text-zinc-500 mt-4 max-w-2xl">
            Real-time account monitoring infrastructure for institutional
            digital asset portfolio management.
          </p>

        </div>

        <button className="px-6 py-3 rounded-2xl bg-amber-500 text-black font-bold">
          Access Secure Dashboard
        </button>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <p className="text-zinc-500 text-sm">
            Portfolio Balance
          </p>

          <h3 className="text-4xl font-black mt-4">
            €128,450
          </h3>

          <p className="text-green-400 mt-3 text-sm">
            +4.82% this month
          </p>

        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <p className="text-zinc-500 text-sm">
            Active Strategy
          </p>

          <h3 className="text-3xl font-black mt-4">
            Alpha Core
          </h3>

          <p className="text-amber-500 mt-3 text-sm">
            Institutional Tier
          </p>

        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <p className="text-zinc-500 text-sm">
            Verification Status
          </p>

          <h3 className="text-3xl font-black mt-4 text-green-400">
            Verified
          </h3>

          <p className="text-zinc-500 mt-3 text-sm">
            KYC Tier-3 Approved
          </p>

        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <p className="text-zinc-500 text-sm">
            Account Security
          </p>

          <h3 className="text-3xl font-black mt-4">
            2FA Active
          </h3>

          <p className="text-green-400 mt-3 text-sm">
            Security Protocol Enabled
          </p>

        </div>

      </div>

      {/* TRANSACTION PANEL */}
      <div className="mt-10 bg-zinc-950 border border-white/10 rounded-3xl p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h3 className="text-3xl font-black">
              Recent Transactions
            </h3>

            <p className="text-zinc-500 mt-2">
              Blockchain funding and withdrawal activity.
            </p>

          </div>

          <button className="border border-white/10 px-5 py-2 rounded-xl text-sm">
            View All
          </button>

        </div>

        <div className="space-y-4">

          {/* TX 1 */}
          <div className="border border-white/10 rounded-2xl p-5 flex items-center justify-between">

            <div>

              <p className="font-semibold">
                BTC Deposit
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                Blockchain confirmation completed
              </p>

            </div>

            <div className="text-right">

              <p className="font-black">
                €12,000
              </p>

              <p className="text-green-400 text-sm mt-1">
                Completed
              </p>

            </div>

          </div>

          {/* TX 2 */}
          <div className="border border-white/10 rounded-2xl p-5 flex items-center justify-between">

            <div>

              <p className="font-semibold">
                USDT ERC20 Deposit
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                Awaiting compliance review
              </p>

            </div>

            <div className="text-right">

              <p className="font-black">
                €5,500
              </p>

              <p className="text-yellow-400 text-sm mt-1">
                Pending
              </p>

            </div>

          </div>

          {/* TX 3 */}
          <div className="border border-white/10 rounded-2xl p-5 flex items-center justify-between">

            <div>

              <p className="font-semibold">
                Portfolio Withdrawal
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                Security verification processing
              </p>

            </div>

            <div className="text-right">

              <p className="font-black">
                €2,300
              </p>

              <p className="text-blue-400 text-sm mt-1">
                Processing
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
          }
