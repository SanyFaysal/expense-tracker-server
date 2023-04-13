const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// // import routes
const expenseRoute = require("./routes/expense.route");

// routes
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1", expenseRoute);

module.exports = app;
