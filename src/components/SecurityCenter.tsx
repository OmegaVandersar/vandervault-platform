"use client";

export default function SecurityCenter() {
  const sessions = [
    {
      device: "Windows Desktop",
      location: "Berlin, Germany",
      status: "Active Now",
    },
    {
      device: "iPhone 15 Pro",
      location: "Toronto, Canada",
      status: "Recently Active",
    },
    {
      device: "MacBook Pro",
      location: "Amsterdam, Netherlands",
      status: "Verified",
    },
  ];

  const protections = [
    {
      title: "Two-Factor Authentication",
      status: "Enabled",
    },
    {
      title: "Withdrawal Protection",
      status: "Active",
    },
    {
      title: "Advanced Encryption",
      status: "Secured",
    },
    {
      title: "Login Monitoring",
      status: "Monitoring",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Security Center
        </h2>

        <p className="text-zinc-500 mt-2">
          Institutional-grade account protection system
        </p>
      </div>

      {/* SECURITY OVERVIEW */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Security Score
          </p>

          <p className="text-2xl font-black text-green-400">
            96%
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Active Sessions
          </p>

          <p className="text-2xl font-black">
            3
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Threat Detection
          </p>

          <p className="text-2xl font-black text-green-400">
            Stable
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Encryption
          </p>

          <p className="text-2xl font-black text-green-400">
            AES-256
          </p>
        </div>

      </div>

      {/* PROTECTION STATUS */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 mb-10">

        <h3 className="text-xl font-black mb-6">
          Protection Systems
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          {protections.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-4 flex justify-between items-center"
            >

              <p className="font-bold">
                {item.title}
              </p>

              <p className="text-green-400 font-bold">
                {item.status}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* ACTIVE SESSIONS */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          Active Login Sessions
        </h3>

        <div className="space-y-4">

          {sessions.map((session, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-4 flex justify-between items-center"
            >

              <div>
                <p className="font-bold">
                  {session.device}
                </p>

                <p className="text-sm text-zinc-500 mt-1">
                  {session.location}
                </p>
              </div>

              <p className="text-green-400 font-bold">
                {session.status}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
      }
