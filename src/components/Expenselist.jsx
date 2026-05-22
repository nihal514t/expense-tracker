function ExpenseList({ expenses, deleteExpense}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Recent Expenses
      </h2>

      <div className="flex flex-col gap-4">

        {expenses.length === 0 && (
  <p className="text-gray-500">
    No expenses added yet
  </p>
)}

        {expenses.map((expense) => (
         <div
  key={expense.id}
  className="flex items-center justify-between border p-4 rounded-lg"
>

  <div>
    <h3 className="font-semibold">
      {expense.title}
    </h3>

    <p className="text-red-500 font-bold">
      ₹{expense.amount}
    </p>
  </div>

  <button
    onClick={() => deleteExpense(expense.id)}
    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
  >
    Delete
  </button>

</div>
        ))}

      </div>

    </div>
  );
}

export default ExpenseList;