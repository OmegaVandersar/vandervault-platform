"use client";

export default function AccountSettings() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Account Settings
        </h2>

        <p className="text-zinc-500 mt-2">
          Manage investor preferences and platform configuration
        </p>
      </div>

      {/* SETTINGS GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* PROFILE SETTINGS */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-6">
            Profile Preferences
          </h3>

          <div className="space-y-5">

            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">
                  Investor Notifications
                </p>

                <p className="text-sm text-zinc-500">
                  Receive portfolio activity alerts
                </p>
              </div>

              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">
                  Email Reports
                </p>

                <p className="text-sm text-zinc-500">
                  Weekly portfolio performance reports
                </p>
              </div>

              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">
                  Withdrawal Confirmation
                </p>

                <p className="text-sm text-zinc-500">
                  Require additional verification
                </p>
              </div>

              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
            </div>

          </div>

        </div>

        {/* PLATFORM SETTINGS */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

          <h3 className="text-xl font-black mb-6">
            Platform Configuration
          </h3>

          <div className="space-y-5">

            <div className="border border-white/10 rounded-2xl p-4">
              <p className="text-sm text-zinc-500 mb-2">
                Preferred Currency
              </p>

              <div className="bg-black border border-white/10 rounded-xl px-4 py-3">
                Euro (€)
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-4">
              <p className="text-sm text-zinc-500 mb-2">
                Platform Language
              </p>

              <div className="bg-black border border-white/10 rounded-xl px-4 py-3">
                English
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-4">
              <p className="text-sm text-zinc-500 mb-2">
                Account Tier
              </p>

              <div className="bg-black border border-white/10 rounded-xl px-4 py-3 text-amber-400 font-bold">
                Institutional Investor
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* SECURITY ACTIONS */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 mt-10">

        <h3 className="text-xl font-black mb-6">
          Security Actions
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <button className="bg-black border border-white/10 rounded-2xl p-4 hover:border-amber-500/40 transition">
            Change Password
          </button>

          <button className="bg-black border border-white/10 rounded-2xl p-4 hover:border-amber-500/40 transition">
            Manage 2FA
          </button>

          <button className="bg-black border border-red-500/20 text-red-400 rounded-2xl p-4 hover:bg-red-500/10 transition">
            Sign Out Sessions
          </button>

        </div>

      </div>

    </section>
  );
      }
