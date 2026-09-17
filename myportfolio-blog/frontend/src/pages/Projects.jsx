import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import React from "react";

const projects = [
  { title: "Personal Portfolio Blog", description: "A responsive portfolio and blog application with Firebase authentication, MongoDB persistence, and a Node.js API.", tech: ["React", "Express", "MongoDB", "Firebase"], type: "Featured" },
  { title: "Udemy Learning Platform Clone", description: "A responsive learning platform interface with course cards, navigation, categories, and modern responsive layouts.", tech: ["HTML", "CSS", "JavaScript"], type: "Frontend" },
  { title: "Favourite Student List", description: "A React application demonstrating routing, global state management with useContext, favourites, and reusable components.", tech: ["React", "React Router", "Context API"], type: "React" },
  { title: "Nostra E-commerce Interface", description: "An e-commerce interface with reusable components, collection search, filters, responsive design, and form validation.", tech: ["HTML", "CSS", "JavaScript"], type: "Frontend" },
  { title: "Weather Report Application", description: "A weather application that consumes an external API and displays location-based weather information.", tech: ["React", "Axios", "REST API"], type: "API Integration" },
  { title: "React Image Gallery", description: "A responsive image gallery built with reusable components, props, arrays, map, and responsive CSS.", tech: ["React", "Vite", "CSS"], type: "React" },
  { title: "Trip Advisor Clone", description: "Developed a responsive TripAdvisor-inspired travel website using HTML5 and CSS3, featuring user-friendly layouts for exploring travel destinations, hotels, restaurants, and attractions across different screen sizes.", tech: ["HTML5", "CSS3", "Media Queries"], type: "Html" },
  { title: "Bulk Mail", description: "Developed a bulk mail application to send emails to multiple recipients efficiently, featuring a user-friendly interface for composing and managing email campaigns.", tech: ["React", "Node.js", "Express.js", "CSS", "Mongo db"], type: "React" },
  { title: "Greenden",  description:"Developed a responsive plant e-commerce website using HTML and Tailwind CSS, featuring product listings, navigation, and a clean, user-friendly interface.", tech: ["Html", "Tailwind CSS"], type: "Html" },

];

export default function Projects() {
  return (
    <div className="page-container page-section">
      <SectionHeading eyebrow="Selected work" title="Projects" text="A collection of learning projects and application concepts demonstrating my development skills." />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual visual-${index % 4}`}><span>{project.type}</span><div className="project-symbol">{index + 1}</div></div>
            <div className="project-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-list">{project.tech.map(t => <span className="skill-tag" key={t}>{t}</span>)}</div>
              <div className="project-actions"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={15} /> Code</a><a href="#" onClick={e => e.preventDefault()}>Preview <ExternalLink size={15} /></a></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
