import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";
import { connectDatabase } from "../db.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    await connectDatabase();
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }
    const saved = await ContactMessage.create({ name, email, message });
    res.status(201).json({ message: "Message saved", id: saved._id });
  } catch (error) {
    res.status(500).json({ message: "Unable to save message", error: error.message });
  }
});

export default router;
