import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { createPost } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function NewPost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", category: "Development" });
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");
    setBusy(true);
    try {
      const token = await user.getIdToken();
      await createPost(form, token);
      navigate("/blog");
    } catch {
      setMessage("Unable to create the post. Check your backend configuration.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page-container page-section narrow-page">
      <SectionHeading eyebrow="Content management" title="Create a new post" text="Publish a professional article or learning note." />
      {message && <div className="alert error">{message}</div>}
      <form onSubmit={submit} className="editor-form">
        <label>Title<input required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Article title" /></label>
        <label>Category<input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="React, Backend, Career..." /></label>
        <label>Excerpt<textarea required rows="3" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} placeholder="Short summary of the article" /></label>
        <label>Content<textarea required rows="14" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Write your article here..." /></label>
        <button className="primary-btn" disabled={busy}>{busy ? "Publishing..." : "Publish Post"}</button>
      </form>
    </div>
  );
}
