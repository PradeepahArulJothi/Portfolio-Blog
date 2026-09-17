import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

export default function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Pradeepah Arul Jothi. Built with React.</p>
        <p>Frontend • Full Stack • Continuous Learning</p>
      </footer>
    </div>
  );
}
