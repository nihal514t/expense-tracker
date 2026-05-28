import DashboardLayout from "../layouts/DashboardLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useExpense } from "../context/ExpenseContext";
import { useState } from "react";
import useFilterExpenses from "../hooks/useFilterExpenses";

function Expenses() {
  const { expenses } = useExpense();

  const [filterCategory, setFilterCategory] = useState("");

  const filteredExpenses = useFilterExpenses(expenses, filterCategory);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-6">Transactions</h1>

      <ExpenseForm />
      <ExpenseList expenses={filteredExpenses} />
    </DashboardLayout>
  );
}

export default Expenses;
