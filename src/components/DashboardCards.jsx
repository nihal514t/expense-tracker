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
    totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

      <div className="bg-green-500 text-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold mb-2">
          Total Income
        </h2>

        <p className="text-3xl font-bold">
          ₹{totalIncome}
        </p>

      </div>

      <div className="bg-red-500 text-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold mb-2">
          Total Expense
        </h2>

        <p className="text-3xl font-bold">
          ₹{totalExpense}
        </p>

      </div>

      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-bold mb-2">
          Balance
        </h2>

        <p className="text-3xl font-bold">
          ₹{balance}
        </p>

      </div>

    </div>
  );
}

export default DashboardCards;