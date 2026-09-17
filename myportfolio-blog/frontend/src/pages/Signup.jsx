import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Code2, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) return setError("Passwords do not match");
    if (form.password.length < 6) return setError("Password must contain at least 6 characters");
    setBusy(true);
    try {
      await signup(form.name, form.email, form.password);
      navigate("/home");
    } catch (err) {
      setError(err.code?.replace("auth/", "").replaceAll("-", " ") || "Unable to create account");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand-panel">
        <div className="auth-logo"><Code2 /> MyPortfolio</div>
        <div>
          <span className="eyebrow light">Create your account</span>
          <h1>Share your<br /><span>professional story.</span></h1>
          <p>Build a personal presence that highlights your technical journey and continuous growth.</p>
        </div>
        <div className="auth-bottom">A portfolio made for your next opportunity.</div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-form-wrap">
          <span className="eyebrow">Get started</span>
          <h2>Create your account</h2>
          <p className="muted">Register to access the portfolio.</p>
          {error && <div className="alert error">{error}</div>}
          <form onSubmit={submit} className="form-stack">
            <label>Full name
              <div className="input-wrap"><UserRound size={17} /><input required placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
            </label>
            <label>Email address
              <div className="input-wrap"><Mail size={17} /><input type="email" required placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
            </label>
            <label>Password
              <div className="input-wrap"><LockKeyhole size={17} /><input type={show ? "text" : "password"} required placeholder="Minimum 6 characters" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /><button type="button" className="input-action" onClick={() => setShow(!show)}>{show ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
            </label>
            <label>Confirm password
              <div className="input-wrap"><LockKeyhole size={17} /><input type={show ? "text" : "password"} required placeholder="Repeat your password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} /></div>
            </label>
            <button className="primary-btn full" disabled={busy}>{busy ? "Creating account..." : "Sign Up"}</button>
          </form>
          <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
