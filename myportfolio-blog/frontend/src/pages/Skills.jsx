import { Code2, Database, GitBranch, Palette, Server, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import React from "react";

const groups = [
  { icon: Code2, title: "Frontend Development", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React", "Responsive Design"] },
  { icon: Palette, title: "UI & Styling", skills: ["Sass / SCSS", "Bootstrap", "Tailwind CSS", "Component Design", "Accessibility Basics"] },
  { icon: Server, title: "Backend Development", skills: ["Node.js", "Express.js", "C# .NET", "REST APIs", "JSON / XML"] },
  { icon: Database, title: "Database", skills: ["MongoDB", "MongoDB Atlas", "SQL", "CRUD Operations", "Data Modeling"] },
  { icon: GitBranch, title: "Tools & Collaboration", skills: ["Git", "TFS", "VersionOne", "Visual Studio", "VS Code", "Jira / Tracking Tools"] },
  { icon: Wrench, title: "Engineering Practices", skills: ["Agile", "Waterfall", "Unit Testing", "HLD", "LLD", "Code Review"] }
];

export default function Skills() {
  return (
    <div className="page-container page-section">
      <SectionHeading eyebrow="Capabilities" title="My Skills" text="Technologies, tools, and practices I use or have worked with." />
      <div className="skills-grid">
        {groups.map(({ icon: Icon, title, skills }) => (
          <article className="skill-group" key={title}>
            <div className="skill-heading"><div className="icon-box"><Icon size={22} /></div><h2>{title}</h2></div>
            <div className="tag-list">{skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="learning-banner">
        <div><span className="eyebrow">Currently learning</span><h2>Modern full-stack and AI-enabled development</h2></div>
        <p>Strengthening backend development, cloud deployment, system design, and practical AI integration skills.</p>
      </div>
    </div>
  );
}
