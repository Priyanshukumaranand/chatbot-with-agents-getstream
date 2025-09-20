import cors from "cors";
import "dotenv/config";
import express from "express";
import { apiKey } from "./serverClient";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: "*"}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "AI assistant Server is running",
    apiKey: apiKey,
   });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});