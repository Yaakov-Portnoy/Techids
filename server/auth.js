import jwt from "jsonwebtoken";

export function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ error: "Authentication is required." });
  try { req.admin = jwt.verify(token, process.env.JWT_SECRET); next(); }
  catch { res.status(401).json({ error: "Your session has expired. Please sign in again." }); }
}
