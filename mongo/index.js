// connect to atlas and return the connection "connectToDatabase"

import { MongoClient } from "mongodb";

// export async function connectToDatabase() {
//   const client = await MongoClient.connect(process.env.DB_URI, {});
//   return client;
// }

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(process.env.DB_URI, opts).then(
      (client) => {
        cached.conn = client;
        return client;
      }
    );
  }

  await cached.promise;
  return cached.conn;
}
