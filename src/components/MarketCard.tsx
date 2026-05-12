type Props = {
  symbol: string;
  name: string;
  price: string;
  change: string;
};

export default function MarketCard({
  symbol,
  name,
  price,
  change,
}: Props) {
  const positive = change.includes("+");

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 hover:border-amber-500/30 transition">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-zinc-500">
            {name}
          </p>

          <h2 className="text-2xl font-black mt-2">
            {symbol}
          </h2>
        </div>

        <div
          className={`text-sm font-bold ${
            positive
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {change}
        </div>

      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-black">
          {price}
        </h3>
      </div>

    </div>
  );
}
