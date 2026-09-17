import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import React from "react";

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-cover">
        <span>{post.category || "Development"}</span>
        <div className="cover-code">&lt;/&gt;</div>
      </div>
      <div className="blog-card-body">
        <div className="post-meta">
          <CalendarDays size={14} />
          {new Date(post.createdAt || Date.now()).toLocaleDateString()}
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post._id}`} className="read-more">
          Read article <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
