import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);

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
  setExpenses(
    expenses.filter((expense) => expense.id !== id)
  );
};
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <ExpenseForm addExpense={addExpense} />

     <ExpenseList
  expenses={expenses}
  deleteExpense={deleteExpense}
/>

    </DashboardLayout>
  );
}

export default Dashboard;