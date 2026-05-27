import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useExpense } from "../context/ExpenseContext";
import useFilterExpenses from "../hooks/useFilterExpenses";
import { useAuth } from "../context/AuthContext";
import ExpenseSummary from "../components/ExpenseSummary";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  const { expenses, fetchExpenses } = useExpense();

  const [filterCategory, setFilterCategory] = useState("");

  const filteredExpenses = useFilterExpenses(expenses, filterCategory);
  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);
  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);
  const balance = totalIncome - totalExpense;

  const { user } = useAuth();

  useEffect(() => {
    if (user?.token) {
      fetchExpenses(user.token);
    }
  }, [user]);
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-6">Welcome {user?.name}</h1>
      <h2 className="text-2xl font-bold mb-12">Dashboard</h2>
      <DashboardCards expenses={expenses} />
      <ExpenseSummary expenses={filteredExpenses} />
    

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
