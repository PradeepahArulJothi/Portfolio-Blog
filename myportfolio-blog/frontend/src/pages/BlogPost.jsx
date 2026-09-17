import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getPost } from "../services/api";
import React from "react";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id.startsWith("sample-")) {
      setPost({
        title: "Getting Started with React",
        category: "React",
        createdAt: "2026-04-15",
        content: `React is a JavaScript library for building user interfaces through reusable components. It helps developers organize complex screens into smaller, manageable pieces.

What is React?

React uses a component-based approach. A component can receive data through props and manage changing information through state.

Key concepts

1. Components: Reusable building blocks of an interface.
2. Props: Inputs passed from one component to another.
3. State: Data that changes during the lifetime of a component.
4. Hooks: Functions such as useState and useEffect that add capabilities to functional components.

My learning approach

I prefer learning a concept by building a small project, understanding the problem it solves, and then applying it in a larger application.`
      });
      return;
    }
    getPost(id).then(({ data }) => setPost(data)).catch(() => setError("This post could not be loaded."));
  }, [id]);

  if (error) return <div className="page-container page-section"><div className="empty-state">{error}<br /><Link to="/blog" className="text-link">Back to blog</Link></div></div>;
  if (!post) return <div className="page-loader">Loading article...</div>;

  return (
    <div className="page-container article-page">
      <Link to="/blog" className="back-link"><ArrowLeft size={16} /> Back to blog</Link>
      <div className="article-header">
        <span className="eyebrow">{post.category || "Development"}</span>
        <h1>{post.title}</h1>
        <div className="post-meta"><CalendarDays size={15} /> {new Date(post.createdAt || Date.now()).toLocaleDateString()}</div>
      </div>
      <article className="article-content">
        {post.content.split("\n").map((paragraph, index) => paragraph.trim() ? <p key={index}>{paragraph}</p> : <br key={index} />)}
      </article>
    </div>
  );
}
