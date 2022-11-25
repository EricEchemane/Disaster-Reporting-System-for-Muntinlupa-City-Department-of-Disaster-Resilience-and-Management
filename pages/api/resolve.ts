import connectToDatabase from 'db/connect';
import normalize, { RequestError } from "http/response_normalizer";
import { NextApiRequest } from "next";

async function handler(req: NextApiRequest) {
    if (req.method !== "POST") throw new RequestError(405, "Method not allowed");

    const { incidentId } = req.body;

    if (!incidentId) throw new RequestError(400, "Bad request");

    const db = await connectToDatabase();
    if (!db) throw new RequestError(500, "Internal server error");
    const { Incident } = db.models;

    const incident = await Incident.updateOne({ _id: incidentId }, { $set: { resolved: true } });
    if (!incident) throw new RequestError(404, "Not found");

    return incident;
}

export default normalize(handler);