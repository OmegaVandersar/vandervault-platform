"use client";

export default function InvestorProfile() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Investor Profile
        </h2>

        <p className="text-zinc-500 mt-2">
          Institutional investor account overview
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 mb-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-5">

            {/* AVATAR */}
            <div className="w-24 h-24 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-3xl font-black text-amber-400">
              OV
            </div>

            {/* INFO */}
            <div>
              <h3 className="text-3xl font-black">
                Omega Vandersar
              </h3>

              <p className="text-zinc-500 mt-1">
                Elite Institutional Investor
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">

                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  Verified
                </div>

                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                  Premium Tier
                </div>

                <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
                  KYC Approved
                </div>

              </div>

            </div>

          </div>

          {/* PORTFOLIO VALUE */}
          <div className="text-left md:text-right">

            <p className="text-sm text-zinc-500">
              Portfolio Value
            </p>

            <p className="text-4xl font-black text-green-400 mt-2">
              €201,400
            </p>

            <p className="text-sm text-green-400 mt-2">
              +7.4% this month
            </p>

          </div>

        </div>

      </div>

      {/* ACCOUNT DETAILS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-6">
            Account Information
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <p className="text-zinc-500">Investor ID</p>
              <p className="font-bold">INV-20481</p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">Region</p>
              <p className="font-bold">European Union</p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">Account Tier</p>
              <p className="font-bold text-amber-400">
                Institutional
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">Verification</p>
              <p className="font-bold text-green-400">
                Fully Verified
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">Investment Status</p>
              <p className="font-bold text-green-400">
                Active
              </p>
            </div>

          </div>

        </div>

        {/* PROFILE COMPLETION */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-6">
            Profile Completion
          </h3>

          <div className="mb-4">

            <div className="flex justify-between mb-2">
              <p className="text-zinc-500">
                Completion Status
              </p>

              <p className="text-green-400 font-bold">
                96%
              </p>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
              <div className="bg-green-400 h-full w-[96%]" />
            </div>

          </div>

          <div className="space-y-4 mt-8">

            <div className="flex justify-between">
              <p className="text-zinc-500">
                Identity Verification
              </p>

              <p className="text-green-400 font-bold">
                Completed
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">
                Wallet Verification
              </p>

              <p className="text-green-400 font-bold">
                Approved
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">
                Security Setup
              </p>

              <p className="text-green-400 font-bold">
                Enabled
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-zinc-500">
                Investment Plan
              </p>

              <p className="text-green-400 font-bold">
                Active
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
            }
