require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const startServer = async () => {
  try {
    await connectDB();

    console.log("MongoDB Connected");

    app.listen(8000, () => {
      console.log("Server running on port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
