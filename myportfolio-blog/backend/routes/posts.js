import { Router } from "express";
import Post from "../models/Post.js";
import { connectDatabase } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    await connectDatabase();
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch posts", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    await connectDatabase();
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
});

router.post("/", requireAuth, async (req, res) => {
  try {
    await connectDatabase();
    const { title, excerpt, content, category } = req.body;
    const post = await Post.create({
      title,
      excerpt,
      content,
      category,
      authorUid: req.user.uid
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: "Unable to create post", error: error.message });
  }
});

router.put("/:id", requireAuth, async (req, res) => {
  try {
    await connectDatabase();
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, authorUid: req.user.uid },
      req.body,
      { new: true, runValidators: true }
    );
    if (!post) return res.status(404).json({ message: "Post not found or not owned by user" });
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "Unable to update post", error: error.message });
  }
});

router.delete("/:id", requireAuth, async (req, res) => {
  try {
    await connectDatabase();
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      authorUid: req.user.uid
    });
    if (!post) return res.status(404).json({ message: "Post not found or not owned by user" });
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(400).json({ message: "Unable to delete post", error: error.message });
  }
});

export default router;
