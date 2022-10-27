import connectToDatabase from "db/connect";
import normalize, { RequestError } from "http/response_normalizer";
import { NextApiRequest } from "next";

const brgyCredentials = new Map<string, string>([
    ["Alabang", "admin123"],
    ["Ayala Alabang", "admin123"],
    ["Bayanan", "admin123"],
    ["Buli", "admin123"],
    ["Cupang", "admin123"],
    ["Poblacion", "admin123"],
    ["Putatan", "admin123"],
    ["Sucat", "admin123"],
    ["Tunasan", "admin123"],
]);

async function handler(req: NextApiRequest) {
    const { username, password } = req.body;
    if (!username || !password) throw new RequestError(400, "Invalid credentials");

    const brgy = brgyCredentials.get(username);
    if (!brgy) throw new RequestError(400, "Invalid credentials");

    if (brgy !== password) throw new RequestError(400, "Invalid credentials");

    const db = await connectToDatabase();
    if (!db) throw new RequestError(500, "Database connection error");
    const { Incident } = db.models;

    const incidents = await Incident.find({ location: username });

    return incidents;
}

export default normalize(handler);