import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorized } from "../api";
import "../Admin.css";

const groups = [{ key: "workshops", label: "Workshop Requests" }, { key: "contact", label: "Contact Messages" }, { key: "get-involved", label: "Get Involved" }];
const statuses = ["New", "Contacted", "Scheduled", "Completed", "Archived"];
function details(item, key) { return key === "workshops" ? [item.school, item.workshop_type, item.students && `${item.students} students`, item.preferred_date].filter(Boolean).join(" · ") : key === "contact" ? item.subject : [item.involvement_type, item.organization, item.phone].filter(Boolean).join(" · "); }

export default function AdminDashboard() {
  const token = localStorage.getItem("techids_admin_token"); const navigate = useNavigate(); const [data, setData] = useState({}); const [summary, setSummary] = useState(null); const [error, setError] = useState(""); const [loading, setLoading] = useState(true);
  const signOut = () => { localStorage.removeItem("techids_admin_token"); navigate("/admin/login"); };
  async function load() { if (!token) return signOut(); try { const results = await Promise.all([authorized("/admin/summary", token), ...groups.map(({ key }) => authorized(`/admin/${key}`, token))]); setSummary(results[0]); setData(Object.fromEntries(groups.map((group, index) => [group.key, results[index + 1]]))); } catch (reason) { setError(reason.message); if (reason.message.includes("session")) signOut(); } finally { setLoading(false); } }
  useEffect(() => { load(); }, []);
  async function update(key, id, status) { try { await authorized(`/admin/${key}/${id}/status`, token, { method: "PATCH", body: JSON.stringify({ status }) }); setData((current) => ({ ...current, [key]: current[key].map((item) => item.id === id ? { ...item, status } : item) })); } catch (reason) { setError(reason.message); } }
  if (loading) return <main className="admin-page"><p>Loading secure dashboard…</p></main>;
  return <main className="admin-page"><header className="admin-header"><div className="admin-title"><img className="admin-logo" src="/techids-logo.png" alt="Techids" /><div><p className="admin-eyebrow">TECHIDS ADMIN</p><h1>Submission dashboard</h1></div></div><button className="button button-secondary" onClick={signOut}>Sign out</button></header>{error && <p className="form-error" role="alert">{error}</p>}<section className="admin-summary">{groups.map(({ key, label }) => <article key={key}><span>NEW</span><strong>{summary?.[key === "get-involved" ? "getInvolved" : key] ?? 0}</strong><p>{label}</p></article>)}</section>{groups.map(({ key, label }) => <section className="admin-section" key={key}><h2>{label}</h2>{data[key]?.length ? <div className="submission-list">{data[key].map((item) => <article className="submission" key={item.id}><div><h3>{item.name}</h3><p>{item.email} · {new Date(`${item.created_at}Z`).toLocaleString()}</p><strong>{details(item, key)}</strong>{item.message && <p className="submission-message">{item.message}</p>}</div><label>Status<select value={item.status} onChange={(event) => update(key, item.id, event.target.value)}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label></article>)}</div> : <p>No submissions yet.</p>}</section>)}</main>;
}
