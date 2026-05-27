const Expense = require("../models/Expense");

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user._id,
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const createExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = await Expense.create({
      user: req.user._id,
      title,
      amount,
      category,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await expense.deleteOne();

    res.json({
      message: "Expense deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
};
