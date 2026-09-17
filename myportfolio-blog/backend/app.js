import express from "express";
import cors from "cors";
import { config } from "./config.js";
import postsRouter from "./routes/posts.js";
import contactRouter from "./routes/contact.js";

const app = express();

app.use(cors({
  origin: config.clientUrl.split(",").map(value => value.trim()),
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("MyPortfolio Backend is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "MyPortfolio API is running" });
});

app.use("/api/posts", postsRouter);
app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
});

export default app;
