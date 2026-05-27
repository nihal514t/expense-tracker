const Expense =
  require("../models/Expense");

const getExpenses =
  async (req, res) => {

    try {

      const expenses =
        await Expense.find({
          user: req.user._id,
        });

      res.json(expenses);

    } catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
};

const createExpense =
  async (req, res) => {

    try {

      const {
        title,
        amount,
        category,
      } = req.body;

      const expense =
        await Expense.create({
          user: req.user._id,
          title,
          amount,
          category,
        });

      res.status(201).json(
        expense
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
};

module.exports = {
  getExpenses,
  createExpense,
};