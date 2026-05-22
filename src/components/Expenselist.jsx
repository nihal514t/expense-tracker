function ExpenseList() {

  const expenses = [
    {
      id: 1,
      title: "Food",
      amount: 500,
    },
    {
      id: 2,
      title: "Travel",
      amount: 1200,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Recent Expenses
      </h2>

      <div className="flex flex-col gap-4">

        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >

            <h3 className="font-semibold">
              {expense.title}
            </h3>

            <p className="text-red-500 font-bold">
              ₹{expense.amount}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ExpenseList;