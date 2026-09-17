import mongoose from "mongoose";
import { config } from "./config.js";

let cached = globalThis.__mongooseCache;
if (!cached) {
  cached = globalThis.__mongooseCache = { conn: null, promise: null };
}

export async function connectDatabase() {
  if (cached.conn) return cached.conn;
  if (!config.mongoUri) throw new Error("MONGODB_URI is missing");

  if (!cached.promise) {
    cached.promise = mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 10000
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
