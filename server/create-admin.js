import "dotenv/config";
import bcrypt from "bcryptjs";
import db from "./db.js";

const [email, password] = process.argv.slice(2);
if (!email || !password || password.length < 12) {
  console.error("Usage: npm run create-admin -- admin@example.org a-password-of-at-least-12-characters");
  process.exit(1);
}
const hash = await bcrypt.hash(password, 12);
db.prepare("INSERT INTO admins (email, password_hash) VALUES (?, ?) ON CONFLICT(email) DO UPDATE SET password_hash = excluded.password_hash").run(email.trim().toLowerCase(), hash);
console.log(`Admin account ready for ${email.trim().toLowerCase()}.`);
