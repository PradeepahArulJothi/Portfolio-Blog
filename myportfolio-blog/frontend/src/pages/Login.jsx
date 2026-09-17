import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Code2, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(form.email, form.password);
      navigate("/home");
    } catch (err) {
      setError(err.code?.replace("auth/", "").replaceAll("-", " ") || "Unable to log in");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand-panel">
        <div className="auth-logo"><Code2 /> MyPortfolio</div>
        <div>
          <span className="eyebrow light">Personal portfolio & blog</span>
          <h1>Build your<br /><span>next chapter.</span></h1>
          <p>Showcase your experience, projects, skills, and ideas in one professional space.</p>
        </div>
        <div className="auth-bottom">React · Node.js · MongoDB · Firebase</div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-form-wrap">
          <span className="eyebrow">Welcome back</span>
          <h2>Sign in to your account</h2>
          <p className="muted">Access your portfolio dashboard and blog.</p>
          {error && <div className="alert error">{error}</div>}
          <form onSubmit={submit} className="form-stack">
            <label>Email address
              <div className="input-wrap"><Mail size={17} /><input type="email" required placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </label>
            <label>Password
              <div className="input-wrap"><LockKeyhole size={17} /><input type={show ? "text" : "password"} required placeholder="Enter your password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /><button type="button" className="input-action" onClick={() => setShow(!show)}>{show ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
            </label>
            <button className="primary-btn full" disabled={busy}>{busy ? "Signing in..." : "Login"}</button>
          </form>
          <p className="auth-switch">Don't have an account? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}
