export default function KYCSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="text-center mb-16">

        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
          Compliance Infrastructure
        </p>

        <h2 className="text-5xl font-black mt-4">
          Identity Verification System
        </h2>

        <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
          Multi-stage KYC verification architecture designed for secure
          institutional onboarding and global compliance standards.
        </p>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-black mb-6">
            Verification Requirements
          </h3>

          <div className="space-y-5 text-zinc-300">

            <div className="border border-white/10 rounded-2xl p-5">
              <p className="font-semibold text-white">
                Government Identification
              </p>

              <p className="text-sm text-zinc-500 mt-2">
                Passport, National ID Card, or Driver’s License.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-5">
              <p className="font-semibold text-white">
                Proof of Address
              </p>

              <p className="text-sm text-zinc-500 mt-2">
                Utility bill or bank statement issued within 90 days.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-5">
              <p className="font-semibold text-white">
                Facial Verification
              </p>

              <p className="text-sm text-zinc-500 mt-2">
                Secure biometric identity confirmation process.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-black mb-6">
            Verification Status
          </h3>

          <div className="space-y-5">

            <div className="flex items-center justify-between border border-white/10 rounded-2xl p-5">
              <div>
                <p className="font-semibold text-white">
                  Account Registration
                </p>

                <p className="text-sm text-zinc-500">
                  Completed
                </p>
              </div>

              <div className="text-green-400 font-semibold">
                Approved
              </div>
            </div>

            <div className="flex items-center justify-between border border-white/10 rounded-2xl p-5">
              <div>
                <p className="font-semibold text-white">
                  Identity Review
                </p>

                <p className="text-sm text-zinc-500">
                  Pending verification
                </p>
              </div>

              <div className="text-yellow-400 font-semibold">
                Pending
              </div>
            </div>

            <div className="flex items-center justify-between border border-white/10 rounded-2xl p-5">
              <div>
                <p className="font-semibold text-white">
                  Security Screening
                </p>

                <p className="text-sm text-zinc-500">
                  Awaiting completion
                </p>
              </div>

              <div className="text-zinc-400 font-semibold">
                Waiting
              </div>
            </div>

          </div>

          <button className="w-full mt-8 py-4 rounded-2xl bg-amber-500 text-black font-bold">
            Begin Verification
          </button>

        </div>

      </div>

    </section>
  );
                  }
