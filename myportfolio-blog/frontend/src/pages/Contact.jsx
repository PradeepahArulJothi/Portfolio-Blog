import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { sendContactMessage } from "../services/api";
import React from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      await sendContactMessage(form);
      setStatus("Thank you. Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Message could not be sent. Please try again later.");
    }
  };

  return (
    <div className="page-container page-section">
      <SectionHeading eyebrow="Let's connect" title="Get in Touch" text="Feel free to reach out for professional conversations, collaborations, or opportunities." />
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's start a conversation.</h2>
          <p>I’m open to discussing software development opportunities, project collaboration, and technology learning.</p>
          <div className="contact-items">
            <div><Mail size={19} /><span><b>Email</b>pradeepaharuljothi@gmail.com</span></div>
            <div><Phone size={19} /><span><b>Phone</b>+91 XXXXX XXXXX</span></div>
            <div><MapPin size={19} /><span><b>Location</b>Chennai, India</span></div>
          </div>
          <div className="social-row"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github /></a></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {status && <div className="alert success">{status}</div>}
          <label>Name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
          <label>Email<input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
          <label>Message<textarea required rows="6" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can I help?" /></label>
          <button className="primary-btn full">Send Message</button>
        </form>
      </div>
    </div>
  );
}
