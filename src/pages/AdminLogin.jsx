import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";
import "../Admin.css";

export default function AdminLogin() {
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false); const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault(); setError(""); setLoading(true);
    const form = new FormData(event.currentTarget);
    try { const { token } = await api("/auth/login", { method: "POST", body: JSON.stringify(Object.fromEntries(form)) }); localStorage.setItem("techids_admin_token", token); navigate("/admin"); }
    catch (reason) { setError(reason.message); } finally { setLoading(false); }
  }
  return <main className="admin-login"><form className="admin-login-card" onSubmit={handleSubmit}><Link to="/" className="admin-logo-link"><img className="admin-logo" src="/techids-logo.png" alt="Techids" /></Link><p className="admin-eyebrow">TECHIDS ADMIN</p><h1>Welcome back.</h1><p>Sign in to view and manage form submissions.</p>{error && <p className="form-error" role="alert">{error}</p>}<label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><button className="button button-primary" disabled={loading}>{loading ? "Signing in…" : "Sign in →"}</button></form></main>;
}
