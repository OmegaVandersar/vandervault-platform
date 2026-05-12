import MarketCard from "./MarketCard";

import { markets } from "@/data/markets";

export default function MarketTerminal() {
  return (
    <section className="py-24">

      <div className="mb-12">

        <p className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">
          Global Markets
        </p>

        <h2 className="text-5xl font-black mt-4 text-white">
          Live Market Terminal
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {markets.map((market) => (
          <MarketCard
            key={market.symbol}
            symbol={market.symbol}
            name={market.name}
            price={market.price}
            change={market.change}
          />
        ))}

      </div>

    </section>
  );
}
