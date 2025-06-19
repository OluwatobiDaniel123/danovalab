import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import route from "./routes/route.js";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const app = express();

const allowedOrigins = "https://danovalab.com";

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ greetings: "Hello from danovalab" });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.use(route);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB error:", err));
