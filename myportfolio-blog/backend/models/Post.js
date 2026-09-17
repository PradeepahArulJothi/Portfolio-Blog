import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    category: { type: String, default: "Development" },
    authorUid: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
