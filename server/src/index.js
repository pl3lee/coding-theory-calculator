import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { decodeRouter } from "./routes/decode.js";
import axios from "axios";
import { generateRouter } from "./routes/generate.js";
import { calculateRouter } from "./routes/calculate.js";

dotenv.config();
export const app = express();

app.use(express.json());
app.use(cors());

app.use("/decode", decodeRouter);
app.use("/generate", generateRouter);
app.use("/calculate", calculateRouter);

app.listen(process.env.PORT || 3001, () =>
  console.log("Server is running on port 3001")
);
