import { createContext, useContext, useEffect, useState } from "react";
import expenseService from "../services/expenseService";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const fetchExpenses = async (token) => {
    try {
      const data = await expenseService.getExpenses(token);

      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [expenses, setExpenses] = useState([]);

  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = async (expense, token) => {
    try {
      const data = await expenseService.createExpense(expense, token);

      setExpenses([...expenses, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id, token) => {
    try {
      await expenseService.deleteExpense(id, token);

      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        editingExpense,
        setEditingExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}
