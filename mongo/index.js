// connect to atlas and return the connection "connectToDatabase"

import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.DB_URI, {});
  return client;
}
