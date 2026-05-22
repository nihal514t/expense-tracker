import { useState } from "react";

function ExpenseForm() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("All fields required");
      return;
    }

    console.log({
      title,
      amount,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-2xl font-bold mb-4">
        Add Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

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

        <button
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Expense
        </button>

      </form>

    </div>
  );
}

export default ExpenseForm;