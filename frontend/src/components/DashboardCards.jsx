import {
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
} from "lucide-react";

function DashboardCards({
  expenses,
}) {

  const totalIncome =
    expenses
      .filter(
        (item) =>
          item.type === "income"
      )
      .reduce(
        (acc, item) =>
          acc + Number(item.amount),
        0
      );

  const totalExpense =
    expenses
      .filter(
        (item) =>
          item.type === "expense"
      )
      .reduce(
        (acc, item) =>
          acc + Number(item.amount),
        0
      );

  const balance =
    totalIncome -
    totalExpense;

  const cards = [
    {
      title: "Income",
      value: totalIncome,
      icon: ArrowDownCircle,
      color:
        "from-emerald-500/90 to-emerald-400/80",
    },
    {
      title: "Expenses",
      value: totalExpense,
      icon: ArrowUpCircle,
      color:
        "from-red-500/90 to-rose-400/80",
    },
    {
      title: "Balance",
      value: balance,
      icon: Wallet,
      color:
        "from-blue-500/90 to-indigo-400/80",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {cards.map(
        (card) => {

          const Icon =
            card.icon;

          return (

            <div
              key={card.title}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} p-6 shadow-lg hover:scale-[1.02] transition-all duration-300`}
            >

              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

              <div className="relative z-10 flex items-start justify-between">

                <div>

                  <p className="text-white/80 text-sm font-medium tracking-wide">

                    {card.title}

                  </p>

                  <h2 className="text-4xl font-semibold text-white mt-3 tracking-tight">

                    ₹{card.value}

                  </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">

                  <Icon
                    size={28}
                    className="text-white"
                    strokeWidth={2}
                  />

                </div>

              </div>

            </div>
          );
        }
      )}

    </div>
  );
}

export default DashboardCards;