import admin from "../firebaseAdmin.js";

export async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    if (!header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token is required" });
    }

    if (!admin.apps.length) {
      return res.status(500).json({ message: "Firebase Admin is not configured" });
    }

    const token = header.substring(7);
    req.user = await admin.auth().verifyIdToken(token);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired authentication token" });
  }
}
