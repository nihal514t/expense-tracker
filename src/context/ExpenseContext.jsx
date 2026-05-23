import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];
  });

  const [editingExpense, setEditingExpense] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = (expense) => {

    if (editingExpense) {

      setExpenses(
        expenses.map((item) =>
          item.id === editingExpense.id
            ? {
                ...item,
                ...expense,
              }
            : item
        )
      );

      setEditingExpense(null);

    } else {

      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          ...expense,
        },
      ]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );
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