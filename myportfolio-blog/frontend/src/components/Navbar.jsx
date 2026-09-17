import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut, Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import React from "react";

const links = [
  ["Home", "/home"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <Link className="brand" to="/home">
        <span className="brand-mark"><Code2 size={19} /></span>
        <span>MyPortfolio</span>
      </Link>

      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setOpen(false)}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {label}
          </NavLink>
        ))}
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={15} /> Logout
        </button>
      </nav>

      <div className="user-chip" title={user?.email}>
        {user?.displayName?.charAt(0)?.toUpperCase() || "P"}
      </div>
    </header>
  );
}
