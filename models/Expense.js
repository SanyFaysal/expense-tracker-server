const { default: mongoose } = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    subCategory: String,
  },
  {
    timeStamps: { createdAt: true, updatedAt: false },
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
