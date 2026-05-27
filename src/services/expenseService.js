import axios from "axios";

const API_URL = "http://localhost:8000/api/expenses";

const getExpenses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const createExpense = async (expenseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, expenseData, config);

  return response.data;
};
const deleteExpense = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios.delete(`${API_URL}/${id}`, config);

  return id;
};

const expenseService = {
  getExpenses,
  createExpense,
  deleteExpense,
};

export default expenseService;
