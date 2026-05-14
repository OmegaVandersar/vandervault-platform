"use client";

export default function TransactionHistory() {
  const transactions = [
    {
      type: "BTC Deposit",
      amount: "€4,200",
      status: "Completed",
      txid: "BTC-847291",
      date: "2026-05-12 14:42",
    },
    {
      type: "USDT Withdrawal",
      amount: "€2,800",
      status: "Processing",
      txid: "USDT-194722",
      date: "2026-05-13 09:18",
    },
    {
      type: "Portfolio Allocation",
      amount: "€12,500",
      status: "Completed",
      txid: "PORT-662819",
      date: "2026-05-11 18:26",
    },
    {
      type: "BTC Deposit",
      amount: "€8,000",
      status: "Completed",
      txid: "BTC-290144",
      date: "2026-05-10 22:07",
    },
    {
      type: "Withdrawal Request",
      amount: "€1,500",
      status: "Pending",
      txid: "WD-552910",
      date: "2026-05-13 11:02",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-black">
          Transaction History
        </h2>

        <p className="text-zinc-500 mt-2">
          Institutional transaction monitoring and account activity
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Total Deposits
          </p>

          <p className="text-2xl font-black text-green-400">
            €148,000
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Total Withdrawals
          </p>

          <p className="text-2xl font-black text-blue-400">
            €42,800
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Pending Transactions
          </p>

          <p className="text-2xl font-black text-yellow-400">
            3
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4">
          <p className="text-sm text-zinc-500">
            Verification Status
          </p>

          <p className="text-2xl font-black text-green-400">
            Verified
          </p>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black/40 border-b border-white/10">
              <tr>
                <th className="text-left p-5 text-zinc-400 font-semibold">
                  Transaction
                </th>

                <th className="text-left p-5 text-zinc-400 font-semibold">
                  Amount
                </th>

                <th className="text-left p-5 text-zinc-400 font-semibold">
                  Status
                </th>

                <th className="text-left p-5 text-zinc-400 font-semibold">
                  Transaction ID
                </th>

                <th className="text-left p-5 text-zinc-400 font-semibold">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>

              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  <td className="p-5 font-semibold">
                    {transaction.type}
                  </td>

                  <td className="p-5 text-green-400 font-bold">
                    {transaction.amount}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        transaction.status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : transaction.status === "Processing"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {transaction.status}
                    </span>

                  </td>

                  <td className="p-5 text-zinc-400">
                    {transaction.txid}
                  </td>

                  <td className="p-5 text-zinc-500">
                    {transaction.date}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
                  }
