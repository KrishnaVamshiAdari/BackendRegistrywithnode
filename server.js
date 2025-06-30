const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db").default;
const authRoutes = require("./routes/authRoutes").default;
const todoRoutes = require("./routes/todoRoutes").default;
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));