import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "./db.js";
import { requireAdmin } from "./auth.js";

const app = express();
const port = Number(process.env.PORT || 5000);
const statuses = new Set(["New", "Contacted", "Scheduled", "Completed", "Archived"]);
const collections = { workshops: "workshop_requests", contact: "contact_messages", "get-involved": "get_involved_requests" };
const clean = (value, limit = 2000) => String(value ?? "").trim().slice(0, limit);
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(value));
const failure = (res, message) => res.status(400).json({ error: message });

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 24) {
  console.error("JWT_SECRET must be set to a secure value of at least 24 characters.");
  process.exit(1);
}
// Vite picks a different port whenever its default one is busy, so pinning
// CORS to a single CLIENT_ORIGIN breaks the moment that happens. Allow any
// localhost port in dev, plus an explicit CLIENT_ORIGIN override if set.
const localOrigin = /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/;
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || localOrigin.test(origin) || origin === process.env.CLIENT_ORIGIN) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json({ limit: "20kb" }));
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/workshops", (req, res) => {
  const { name, email, school, phone, students, preferredDate, workshopType, message } = req.body;
  if (!clean(name) || !clean(school) || !clean(workshopType) || !validEmail(email)) return failure(res, "Please complete the required fields with a valid email address.");
  const groupSize = students === "" || students == null ? null : Number(students);
  if (groupSize !== null && (!Number.isInteger(groupSize) || groupSize < 1 || groupSize > 10000)) return failure(res, "Enter a group size between 1 and 10,000.");
  db.prepare("INSERT INTO workshop_requests (name,email,school,phone,students,preferred_date,workshop_type,message) VALUES (?,?,?,?,?,?,?,?)").run(clean(name, 100), clean(email, 254).toLowerCase(), clean(school, 160), clean(phone, 40), groupSize, clean(preferredDate, 30), clean(workshopType, 80), clean(message));
  res.status(201).json({ message: "Workshop request received." });
});
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!clean(name) || !clean(subject) || !clean(message) || !validEmail(email)) return failure(res, "Please complete all fields with a valid email address.");
  db.prepare("INSERT INTO contact_messages (name,email,subject,message) VALUES (?,?,?,?)").run(clean(name, 100), clean(email, 254).toLowerCase(), clean(subject, 160), clean(message));
  res.status(201).json({ message: "Message received." });
});
app.post("/api/get-involved", (req, res) => {
  const { name, email, phone, involvementType, organization, message } = req.body;
  if (!clean(name) || !clean(involvementType) || !validEmail(email)) return failure(res, "Please complete the required fields with a valid email address.");
  db.prepare("INSERT INTO get_involved_requests (name,email,phone,involvement_type,organization,message) VALUES (?,?,?,?,?,?)").run(clean(name, 100), clean(email, 254).toLowerCase(), clean(phone, 40), clean(involvementType, 80), clean(organization, 160), clean(message));
  res.status(201).json({ message: "Interest received." });
});
app.post("/api/auth/login", async (req, res) => {
  const email = clean(req.body.email, 254).toLowerCase();
  const admin = db.prepare("SELECT * FROM admins WHERE email = ?").get(email);
  if (!admin || !(await bcrypt.compare(String(req.body.password ?? ""), admin.password_hash))) return res.status(401).json({ error: "Email or password is incorrect." });
  res.json({ token: jwt.sign({ sub: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "8h" }) });
});
app.get("/api/admin/summary", requireAdmin, (_req, res) => {
  const count = (table) => db.prepare(`SELECT COUNT(*) AS count FROM ${table} WHERE status = 'New'`).get().count;
  res.json({ workshops: count(collections.workshops), contact: count(collections.contact), getInvolved: count(collections["get-involved"]) });
});
Object.entries(collections).forEach(([route, table]) => {
  app.get(`/api/admin/${route}`, requireAdmin, (_req, res) => res.json(db.prepare(`SELECT * FROM ${table} ORDER BY datetime(created_at) DESC`).all()));
  app.patch(`/api/admin/${route}/:id/status`, requireAdmin, (req, res) => {
    if (!statuses.has(req.body.status)) return failure(res, "Invalid status.");
    const result = db.prepare(`UPDATE ${table} SET status = ? WHERE id = ?`).run(req.body.status, Number(req.params.id));
    if (!result.changes) return res.status(404).json({ error: "Submission not found." });
    res.json({ message: "Status updated." });
  });
});
app.use((_req, res) => res.status(404).json({ error: "Not found." }));
app.listen(port, () => console.log(`Techids API listening at http://localhost:${port}`));
