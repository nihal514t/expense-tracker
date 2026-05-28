import { useState, useEffect } from "react";

import { useExpense } from "../context/ExpenseContext";

import { useAuth } from "../context/AuthContext";

function ExpenseForm() {
  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("");
  const { addExpense, editingExpense } = useExpense();
  const [type, setType] = useState("");

  const { user } = useAuth();
  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);

      setAmount(editingExpense.amount);

      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !type) {
      alert("All fields required");
      return;
    }

    addExpense(
      {
        title,
        amount,
        category,
        type,
      },
      user.token,
    );
    setTitle("");
    setAmount("");
    setCategory("");
    setType("");
  };

  const expenseCategories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Health",
    "Entertainment",
  ];

  const incomeCategories = [
    "Salary",
    "Freelance",
    "Business",
    "Investment",
    "Bonus",
  ];
  const categories =
  type === "income"
    ? incomeCategories
    : expenseCategories;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Add Expense/Income</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 rounded-lg"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Type</option>

          <option value="income">Income</option>

          <option value="expense">Expense</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Category</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Add Expense/Income
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
