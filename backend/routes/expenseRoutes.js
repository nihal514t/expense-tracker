const express = require("express");

const router = express.Router();

const {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getExpenses).post(protect, createExpense);
router.delete("/:id", protect, deleteExpense);
router.put("/:id", protect, updateExpense);

module.exports = router;
