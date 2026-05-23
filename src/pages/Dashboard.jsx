import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useExpense } from "../context/ExpenseContext";
import useFilterExpenses from "../hooks/useFilterExpenses";

function Dashboard() {
  const { expenses } = useExpense();
  const [filterCategory, setFilterCategory] = useState("");
  const filteredExpenses = useFilterExpenses(expenses, filterCategory);
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <ExpenseForm />
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
      <ExpenseList expenses={filteredExpenses} />
    </DashboardLayout>
  );
}

export default Dashboard;
