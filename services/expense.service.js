const Expense = require("../models/Expense");

exports.createExpenseService = async (data) => {
  const result = await Expense.create(data);
  return result;
};
