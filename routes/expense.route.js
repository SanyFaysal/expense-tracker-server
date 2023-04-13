const express = require("express");
const expenseController = require("../controllers/expense.controller");

const router = express.Router();
router
  .route("/expense")
  .get(expenseController.getExpenses)
  .post(expenseController.createExpense);

module.exports = router;
