"use client";

export default function PlansSection() {
  const plans = [
    {
      name: "Starter Portfolio",
      min: 500,
      max: 4999,
      returnRate: "0.8% – 1.2% / day",
      duration: "20 Business Days",
      color: "border-white/10",
    },
    {
      name: "Growth Portfolio",
      min: 5000,
      max: 24999,
      returnRate: "1.2% – 1.8% / day",
      duration: "30 Business Days",
      color: "border-amber-500/40",
    },
    {
      name: "Advanced Portfolio",
      min: 25000,
      max: 99999,
      returnRate: "1.8% – 2.3% / day",
      duration: "45 Business Days",
      color: "border-white/10",
    },
    {
      name: "Institutional Portfolio",
      min: 100000,
      max: "Unlimited",
      returnRate: "2.3% – 3.0% / day",
      duration: "60 Business Days",
      color: "border-white/10",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black">Portfolio Plans</h2>
        <p className="text-zinc-500 mt-2">
          Euro-based investment tier structure (UI simulation)
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-zinc-950 border ${plan.color} rounded-2xl p-6 hover:scale-[1.02] transition`}
          >

            <h3 className="text-xl font-black">{plan.name}</h3>

            <p className="text-zinc-500 text-sm mt-3">
              Minimum: €{plan.min}
            </p>

            <p className="text-zinc-500 text-sm">
              Maximum: €{plan.max}
            </p>

            <p className="mt-4 text-amber-400 font-bold">
              {plan.returnRate}
            </p>

            <p className="text-zinc-400 text-sm mt-2">
              Duration: {plan.duration}
            </p>

            <button className="mt-6 w-full bg-amber-500 text-black py-2 rounded-xl font-bold">
              Select Plan
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}
