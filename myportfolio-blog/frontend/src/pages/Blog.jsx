import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import { getPosts } from "../services/api";
import { useAuth } from "../context/AuthContext";
import React from "react";

const fallbackPosts = [
  { _id: "sample-1", title: "Getting Started with React", excerpt: "A practical introduction to components, props, state, and building reusable user interfaces.", category: "React", createdAt: "2026-04-15" },
  { _id: "sample-2", title: "Understanding Node.js and Express.js", excerpt: "Learn the fundamentals of creating APIs, handling routes, and structuring a backend application.", category: "Backend", createdAt: "2026-04-10" },
  { _id: "sample-3", title: "Responsive Web Design Principles", excerpt: "Useful principles for building interfaces that work smoothly across desktop, tablet, and mobile screens.", category: "CSS", createdAt: "2026-04-05" },
  { _id: "sample-4", title: "MongoDB Basics for Developers", excerpt: "An overview of collections, documents, CRUD operations, and how MongoDB fits into full-stack applications.", category: "Database", createdAt: "2026-04-01" }
];

export default function Blog() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(({ data }) => setPosts(data.length ? data : fallbackPosts))
      .catch(() => setPosts(fallbackPosts))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container page-section">
      <div className="heading-with-action">
        <SectionHeading eyebrow="Thoughts & tutorials" title="My Blog" text="Notes, tutorials, and lessons from my development journey." />
        {user && <Link to="/blog/new" className="primary-btn"><Plus size={17} /> New Post</Link>}
      </div>
      {loading ? <div className="empty-state">Loading posts...</div> : <div className="blog-grid">{posts.map(post => <BlogCard post={post} key={post._id} />)}</div>}
    </div>
  );
}
