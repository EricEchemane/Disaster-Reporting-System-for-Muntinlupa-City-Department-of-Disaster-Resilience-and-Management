import connectToDatabase from "db/db-connector";
import normalize, { RequestError } from "http_adapters/response-normalizer";
import { NextApiRequest } from "next";

async function handler(req: NextApiRequest) {
    if (req.method !== 'POST') throw new RequestError(405, 'Method not allowed');
    const { name, password, userType, username } = req.body;
    if (!name || !password || !userType) throw new RequestError(400, 'Something is missing');

    if (userType === 'brgy') {
        const db = await connectToDatabase();
        const barangay = await db.models.Barangay.findOne({ name });
        if (!barangay) throw new RequestError(404, 'Barangay not found');
        if (barangay.password !== password) throw new RequestError(401, 'Incorrect password');
        return { type: 'brgy', _id: barangay._id };
    }
    else if (userType === 'admin') {
        if (!username) throw new RequestError(400, 'Username is missing');
        const _username = process.env.ADMIN_USERNAME;
        const _password = process.env.ADMIN_PASSWORD;
        if (_username !== username || _password !== password) throw new RequestError(401, 'Incorrect username or password');
        return { type: "admin" };
    }
}

// disable the protection since user info is not needed here
// this route is used to obtain the credentials that is needed for other routes
export default normalize(handler, { protect: false });