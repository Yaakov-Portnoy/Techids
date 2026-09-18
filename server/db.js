import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.join(directory, "data");
fs.mkdirSync(dataDirectory, { recursive: true });
const db = new DatabaseSync(path.join(dataDirectory, "techids.db"));
db.exec("PRAGMA journal_mode = WAL;");
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
  CREATE TABLE IF NOT EXISTS workshop_requests (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, school TEXT NOT NULL, phone TEXT, students INTEGER, preferred_date TEXT, workshop_type TEXT NOT NULL, message TEXT, status TEXT NOT NULL DEFAULT 'New', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
  CREATE TABLE IF NOT EXISTS contact_messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, subject TEXT NOT NULL, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'New', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
  CREATE TABLE IF NOT EXISTS get_involved_requests (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT, involvement_type TEXT NOT NULL, organization TEXT, message TEXT, status TEXT NOT NULL DEFAULT 'New', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
`);
export default db;
