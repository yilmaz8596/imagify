import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
