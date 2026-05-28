import DashboardLayout from "../layouts/DashboardLayout";

import { useExpense } from "../context/ExpenseContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Reports() {
  const { expenses } = useExpense();

  const expenseTransactions = expenses.filter(
    (item) => item.type === "expense",
  );

  const categoryTotals = {};

  expenseTransactions.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += Number(expense.amount);
    } else {
      categoryTotals[expense.category] = Number(expense.amount);
    }
  });

  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      name: category,
      value: amount,
    }),
  );

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A855F7",
    "#EF4444",
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-6">Reports</h1>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Expense Breakdown</h2>
        <div className="w-full h-[400px] min-h-[400px]">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-4">
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <div key={category} className="flex justify-between border-b pb-2">
              <span className="font-medium">{category}</span>

              <span className="font-bold text-red-500">₹{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Reports;
