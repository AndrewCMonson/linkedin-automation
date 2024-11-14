import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./src/config";
import { router } from "./src/controllers/index.js";
dotenv.config();

const PORT = process.env.PORT || 3007;
const app = express();

connectDB();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
