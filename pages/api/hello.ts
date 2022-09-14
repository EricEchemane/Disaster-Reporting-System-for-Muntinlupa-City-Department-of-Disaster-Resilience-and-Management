import connectToDatabase from 'db/db-connector';
import normalize from 'http_adapters/response-normalizer';
import type { NextApiRequest } from 'next';

async function handler(req: NextApiRequest) {
  const db = await connectToDatabase();
  const docs = await db.models.Caller.findOne({ phoneNumber: "asdasd" });
  return docs;
}

export default normalize(handler);