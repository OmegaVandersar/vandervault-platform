"use client";

export default function SupportCenter() {
  const supportOptions = [
    {
      title: "Account Assistance",
      description:
        "Get help with investor verification, account access, and profile management.",
      status: "Available 24/7",
    },
    {
      title: "Portfolio Support",
      description:
        "Receive guidance regarding portfolio performance and investment activity.",
      status: "Priority Access",
    },
    {
      title: "Transaction Support",
      description:
        "Assistance for deposits, withdrawals, and blockchain confirmations.",
      status: "Realtime Monitoring",
    },
    {
      title: "Security Department",
      description:
        "Report suspicious activity and manage account security protection.",
      status: "Protected Channel",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Investor Support Center
        </h2>

        <p className="text-zinc-500 mt-2">
          Institutional-grade assistance and investor communication
        </p>
      </div>

      {/* STATUS OVERVIEW */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Support Status
          </p>

          <p className="text-2xl font-black text-green-400">
            Online
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Average Response
          </p>

          <p className="text-2xl font-black">
            3 min
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Active Agents
          </p>

          <p className="text-2xl font-black">
            18
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Security Channel
          </p>

          <p className="text-2xl font-black text-green-400">
            Encrypted
          </p>
        </div>

      </div>

      {/* SUPPORT OPTIONS */}
      <div className="grid md:grid-cols-2 gap-6">

        {supportOptions.map((option, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-white/10 rounded-3xl p-6"
          >

            <div className="flex justify-between items-start mb-6">

              <div>
                <h3 className="text-2xl font-black">
                  {option.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {option.description}
                </p>
              </div>

            </div>

            <div className="flex justify-between items-center mt-8">

              <p className="text-green-400 font-bold">
                {option.status}
              </p>

              <button className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors text-black px-5 py-2 rounded-xl font-semibold">
                Contact
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* FOOTER NOTICE */}
      <div className="mt-12 text-center">

        <p className="text-zinc-500 max-w-2xl mx-auto">
          All investor communications are protected through encrypted channels and monitored by our institutional support infrastructure.
        </p>

      </div>

    </section>
  );
            }
