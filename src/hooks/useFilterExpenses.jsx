function useFilterExpenses(
  expenses,
  filterCategory
) {

  const filteredExpenses = filterCategory
    ? expenses.filter(
        (expense) =>
          expense.category === filterCategory
      )
    : expenses;

  return filteredExpenses;
}

export default useFilterExpenses;