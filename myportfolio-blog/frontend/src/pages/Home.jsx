import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Database, Layers3, Sparkles } from "lucide-react";
import React from "react";

const highlights = [
  { icon: Layers3, title: "Frontend Engineering", text: "Angular, React, TypeScript, HTML, CSS, Tailwind CSS, Sass and Bootstrap" },
  { icon: Database, title: "Backend & Data", text: "Node.js, Express.js, C# .NET, REST APIs, SQL and MongoDB" },
  { icon: BriefcaseBusiness, title: "Delivery Practices", text: "Agile, Waterfall, unit testing, HLD and LLD" },
  { icon: Sparkles, title: "Continuous Learning", text: "Modern full-stack development and AI-enabled solutions" }
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow light">Full Stack Developer · Technical Professional</span>
          <h1>Hi, I'm <span>Pradeepah<br />Arul Jothi.</span></h1>
          <p>I’m a software professional with 10+ years of experience building user-focused applications, collaborating with teams, and delivering maintainable solutions.</p>
          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">Explore Projects <ArrowRight size={17} /></Link>
            <Link to="/blog" className="secondary-btn">Read My Blog</Link>
          </div>
        </div>
        <div className="hero-identity">
          <div className="initials-circle">PAJ</div>
          <p>Frontend · Full Stack · Problem Solving</p>
        </div>
      </section>

      <section className="highlight-grid page-container">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div className="highlight-card" key={title}>
            <div className="icon-box"><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="intro-section page-container two-column">
        <div>
          <span className="eyebrow">Professional snapshot</span>
          <h2>Experience, adaptability, and a passion for building.</h2>
        </div>
        <div>
          <p>I have worked across software development activities including analysis, design, implementation, testing, maintenance, and team collaboration. My core strength is frontend development, supported by full-stack learning and practical project work.</p>
          <Link to="/about" className="text-link">Learn more about me <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
