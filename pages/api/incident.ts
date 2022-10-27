import connectToDatabase from 'db/connect';
import { Incident as IncidentType } from "db/incident_report.schema";
import normalize, { RequestError } from "http/response_normalizer";
import { NextApiRequest } from "next";

async function handler(req: NextApiRequest) {
    if (req.method !== "POST") throw new RequestError(405, "Method not allowed");

    const { description, location, photos, reporter }: IncidentType = req.body;
    if (!description || !location || !photos || !reporter
        || !reporter.address || !reporter.contactNumber || !reporter.fullName) throw new RequestError(400, "Bad request");

    const db = await connectToDatabase();
    if (!db) throw new RequestError(500, "Internal server error");
    const { Incident } = db.models;

    const newIncident = new Incident({ description, location, photos, reporter });
    await newIncident.save();

    return newIncident;
}

export default normalize(handler);