import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {
  const [filterCategory, setFilterCategory] = useState("");

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const filteredExpenses = filterCategory
    ? expenses.filter((expense) => expense.category === filterCategory)
    : expenses;
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        ...expense,
      },
    ]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <ExpenseForm addExpense={addExpense} />
      <div className="mb-6">
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-3 rounded-lg bg-white"
        >
          <option value="">All Categories</option>

          <option value="Food">Food</option>

          <option value="Travel">Travel</option>

          <option value="Shopping">Shopping</option>

          <option value="Bills">Bills</option>
        </select>
      </div>
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </DashboardLayout>
  );
}

export default Dashboard;
