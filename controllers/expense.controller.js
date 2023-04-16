const {
  createExpenseService,
  getExpenseService,
} = require("../services/expense.service");

exports.getExpenses = async (req, res) => {
  try {
    const {
      result,
      totalExpense,
      weeklyExpense,
      latestActivity,
      weeklyActivities,
      monthlyActivities,
    } = await getExpenseService();

    res.status(200).json({
      status: "Success",
      message: "Successfully get all of your expenses",
      totalExpense,
      weeklyExpense,
      latestActivity,
      weeklyActivities,
      monthlyActivities,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.createExpense = async (req, res) => {
  try {
    const data = req.body;
    const expense = await createExpenseService(data);

    res.status(200).json({
      status: "Success",
      message: "Successfully create added your expense",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
