import { createContext, useContext, useEffect, useState } from "react";
import expenseService from "../services/expenseService";
import { useAuth } from "./AuthContext";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const { user } = useAuth();
  const fetchExpenses = async (token) => {
    try {
      const data = await expenseService.getExpenses(token);

      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    if (!user) {
      setExpenses([]);
    }
  }, [user]);

  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = async (expense, token) => {
    try {
      if (editingExpense) {
        const updatedExpense = await expenseService.updateExpense(
          editingExpense._id,
          expense,
          token,
        );

        setExpenses(
          expenses.map((item) =>
            item._id === editingExpense._id ? updatedExpense : item,
          ),
        );

        setEditingExpense(null);
      } else {
        const data = await expenseService.createExpense(expense, token);

        setExpenses([...expenses, data]);
      }
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
        fetchExpenses,
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
