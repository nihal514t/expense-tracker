require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});


const PORT = 5000;
console.log(process.env.MONGO_URI);
connectDB();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
