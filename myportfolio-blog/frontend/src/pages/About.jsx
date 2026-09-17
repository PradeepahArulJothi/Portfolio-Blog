import { Mail, MapPin, Briefcase, GraduationCap, Github, Linkedin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import React from "react";

export default function About() {
  return (
    <div className="page-container page-section">
      <SectionHeading eyebrow="Profile" title="About Me" text="A brief introduction to my professional journey, experience, and goals." />
      <section className="about-grid">
        <div className="profile-card">
          <div className="initials-large">PAJ</div>
          <h2>Pradeepah Arul Jothi</h2>
          <p className="role">Frontend & Full Stack Developer</p>
          <div className="profile-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
        <div className="about-content">
          <h2>Building reliable and engaging digital experiences.</h2>
          <p>I am a software development professional with 10+ years of experience in application development and delivery. My primary expertise is in frontend engineering, with hands-on exposure to Angular, React, JavaScript, TypeScript, HTML, CSS, Sass, and Bootstrap.</p>
          <p>I also have knowledge of C# .NET, Node.js, Express.js, REST APIs, MongoDB, and SQL. I enjoy understanding business requirements, designing practical solutions, writing maintainable code, and working with cross-functional teams.</p>
          <div className="detail-list">
            <div><MapPin size={18} /><span><b>Location</b>Chennai, India</span></div>
            <div><Briefcase size={18} /><span><b>Experience</b>10+ years in IT/software development</span></div>
            <div><GraduationCap size={18} /><span><b>Education</b>Bachelor's degree in Electronics and Communications</span></div>
            <div><Mail size={18} /><span><b>Email</b>pradeepaharuljothi@gmail.com</span></div>
          </div>
        </div>
      </section>
      <section className="journey-card">
        <span className="eyebrow">My approach</span>
        <h2>From requirements to delivery</h2>
        <p>I value clear communication, structured development, quality checks, and continuous improvement. I have worked with Agile and Waterfall methodologies and have knowledge of high-level and low-level design, version control, task tracking, and development tools.</p>
      </section>
    </div>
  );
}
