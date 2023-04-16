const Expense = require("../models/Expense");

exports.getExpenseService = async () => {
  const today = new Date();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const lastTwoDay = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);

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

  // last two days activity
  const latestActivity = await Expense.aggregate([
    {
      $match: {
        date: {
          $gte: lastTwoDay,
          $lte: today,
        },
      },
    },
  ]);
  // last one days activity
  const monthlyActivities = await Expense.aggregate([
    {
      $match: {
        date: {
          $gte: lastMonth,
          $lte: today,
        },
      },
    },
  ]);
  const weeklyActivities = await Expense.aggregate([
    {
      $match: {
        date: {
          $gte: lastWeek,
          $lte: today,
        },
      },
    },
  ]);

  return {
    result,
    totalExpense,
    weeklyExpense,
    latestActivity,
    weeklyActivities,
    monthlyActivities,
  };
};
exports.createExpenseService = async (data) => {
  const result = await Expense.create(data);
  return result;
};
