import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import axios from "axios";

dotenv.config();
export const app = express();

app.use(express.json());
app.use(cors());

server.listen(process.env.PORT || 3001, () =>
  console.log("Server is running on port 3001")
);
