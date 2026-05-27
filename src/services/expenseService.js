import axios from "axios";

const API_URL =
  "http://localhost:8000/api/expenses";

const getExpenses =
  async (token) => {

    const config = {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    };

    const response =
      await axios.get(
        API_URL,
        config
      );

    return response.data;
};

const createExpense =
  async (
    expenseData,
    token
  ) => {

    const config = {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    };

    const response =
      await axios.post(
        API_URL,
        expenseData,
        config
      );

    return response.data;
};

const expenseService = {
  getExpenses,
  createExpense,
};

export default expenseService;