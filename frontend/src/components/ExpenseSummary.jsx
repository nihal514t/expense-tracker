function ExpenseSummary({ expenses }) {
  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Expense Summary</h2>

      <p className="text-lg">
        Total Expenses:
        <span className="font-bold ml-2">₹{totalExpense}</span>
      </p>
    </div>
  );
}

export default ExpenseSummary;
