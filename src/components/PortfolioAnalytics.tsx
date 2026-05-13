"use client";

export default function PortfolioAnalytics() {
  const assets = [
    {
      name: "Bitcoin",
      allocation: "42%",
      value: "€84,200",
    },
    {
      name: "Ethereum",
      allocation: "26%",
      value: "€52,400",
    },
    {
      name: "USDT Reserve",
      allocation: "18%",
      value: "€36,800",
    },
    {
      name: "Alternative Assets",
      allocation: "14%",
      value: "€28,000",
    },
  ];

  const monthlyPerformance = [
    "+4.2%",
    "+6.1%",
    "+3.4%",
    "+8.7%",
    "+5.2%",
    "+7.4%",
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Portfolio Analytics
        </h2>

        <p className="text-zinc-500 mt-2">
          Institutional investment performance overview
        </p>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Total Portfolio
          </p>

          <p className="text-2xl font-black text-green-400">
            €201,400
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Monthly Growth
          </p>

          <p className="text-2xl font-black text-green-400">
            +7.4%
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Active Assets
          </p>

          <p className="text-2xl font-black">
            12
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Risk Index
          </p>

          <p className="text-2xl font-black text-yellow-400">
            Moderate
          </p>
        </div>

      </div>

      {/* ASSET ALLOCATION */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 mb-10">

        <h3 className="text-xl font-black mb-6">
          Asset Allocation
        </h3>

        <div className="space-y-4">

          {assets.map((asset, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-4"
            >

              <div className="flex justify-between mb-2">
                <p className="font-bold">
                  {asset.name}
                </p>

                <p className="text-green-400 font-bold">
                  {asset.value}
                </p>
              </div>

              <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full"
                  style={{
                    width: asset.allocation,
                  }}
                />
              </div>

              <p className="text-sm text-zinc-500 mt-2">
                Allocation: {asset.allocation}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* PERFORMANCE */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-black mb-6">
          Monthly Performance
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

          {monthlyPerformance.map((month, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-xl p-4 text-center"
            >

              <p className="text-sm text-zinc-500">
                Month {index + 1}
              </p>

              <p className="text-green-400 text-xl font-black mt-2">
                {month}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
        } 
