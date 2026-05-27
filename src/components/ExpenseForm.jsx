import { useState, useEffect } from "react";

import { useExpense }
from "../context/ExpenseContext";

import { useAuth }
from "../context/AuthContext";

function ExpenseForm() {
  const [title, setTitle] =
  useState("");

const [amount, setAmount] =
  useState("");

const [category, setCategory] =
  useState("");
 const { addExpense, editingExpense } =
  useExpense();

const { user } =
  useAuth();
useEffect(() => {

  if (editingExpense) {

    setTitle(
      editingExpense.title
    );

    setAmount(
      editingExpense.amount
    );

    setCategory(
      editingExpense.category
    );
  }

}, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
      alert("All fields required");
      return;
    }

    addExpense(
  {
    title,
    amount,
    category,
  },
  user.token
);
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Expense Title"
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Category</option>

          <option value="Food">Food</option>

          <option value="Travel">Travel</option>

          <option value="Shopping">Shopping</option>

          <option value="Bills">Bills</option>
        </select>

        <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
