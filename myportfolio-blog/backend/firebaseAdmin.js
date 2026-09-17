import admin from "firebase-admin";
import { config } from "./config.js";

if (!admin.apps.length) {
  if (!config.firebaseProjectId || !config.firebaseClientEmail || !config.firebasePrivateKey) {
    console.warn("Firebase Admin environment variables are not fully configured.");
  } else {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: config.firebaseProjectId,
        clientEmail: config.firebaseClientEmail,
        privateKey: config.firebasePrivateKey
      })
    });
  }
}

export default admin;
