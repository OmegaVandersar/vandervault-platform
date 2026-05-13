"use client";

export default function AdminAnalytics() {
  const stats = [
    { label: "Total Investors", value: "1,284" },
    { label: "Active Sessions", value: "312" },
    { label: "Pending KYC", value: "47" },
    { label: "Completed KYC", value: "1,021" },
  ];

  const systemHealth = [
    { label: "API Status", value: "ONLINE", color: "text-green-400" },
    { label: "Database", value: "STABLE", color: "text-green-400" },
    { label: "Security Layer", value: "ACTIVE", color: "text-green-400" },
    { label: "Latency", value: "LOW", color: "text-green-400" },
  ];

  const recentActivity = [
    "New investor registered (EU region)",
    "BTC deposit detected",
    "KYC verification submitted",
    "Withdrawal request queued",
    "System login from admin panel",
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-black">Admin Analytics</h2>
        <p className="text-zinc-500 mt-2">
          Platform monitoring and operational overview
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-zinc-950 border border-white/10 rounded-2xl p-4"
          >
            <p className="text-sm text-zinc-500">{s.label}</p>
            <p className="text-2xl font-black">{s.value}</p>
          </div>
        ))}

      </div>

      {/* SYSTEM HEALTH */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 mb-10">

        <h3 className="text-xl font-black mb-6">System Health</h3>

        <div className="grid md:grid-cols-4 gap-4">

          {systemHealth.map((h, i) => (
            <div key={i} className="border border-white/10 p-4 rounded-xl">

              <p className="text-sm text-zinc-500">{h.label}</p>
              <p className={`text-xl font-black ${h.color}`}>
                {h.value}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* ACTIVITY LOG */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          Recent System Activity
        </h3>

        <div className="space-y-3">

          {recentActivity.map((a, i) => (
            <div
              key={i}
              className="border border-white/10 p-4 rounded-xl"
            >
              {a}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
     }
