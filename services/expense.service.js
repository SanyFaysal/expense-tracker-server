const Expense = require("../models/Expense");

exports.getExpenseService = async () => {
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const result = await Expense.find({});

  //calculate total expense
  let totalExpense = 0;
  for (let index = 0; index < result.length; index++) {
    totalExpense = totalExpense + result[index].amount;
  }

  // calculate weekly income
  let weeklyExpense = 0;
  for (let index = 0; index < result.length; index++) {
    if (result[index].date > lastWeek) {
      weeklyExpense = weeklyExpense + result[index].amount;
    }
  }

  return { result, totalExpense, weeklyExpense };
};
exports.createExpenseService = async (data) => {
  const result = await Expense.create(data);
  return result;
};
