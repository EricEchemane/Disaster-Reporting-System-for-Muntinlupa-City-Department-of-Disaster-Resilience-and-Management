import connectToDatabase from "db/db-connector";
import normalize, { RequestError } from "http_adapters/response-normalizer";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from 'cookies-next';

const COOKIE_KEY = "disaster";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') throw new RequestError(405, 'Method not allowed');
    const { name, password, userType, username } = req.body;
    if (!password || !userType) throw new RequestError(400, 'Something is missing');

    if (userType === 'brgy') {
        const db = await connectToDatabase();
        const barangay = await db.models.Barangay.findOne({ name });
        if (!barangay) throw new RequestError(404, 'Barangay not found');
        if (barangay.password !== password) throw new RequestError(401, 'Incorrect password');

        setCookie(
            COOKIE_KEY,
            JSON.stringify(barangay),
            { req, res, maxAge: 60 * 60 * 24 }
        );
        return { userType: 'brgy' };
    }
    else if (userType === 'admin') {
        if (!username) throw new RequestError(400, 'Username is missing');
        const _username = process.env.ADMIN_USERNAME;
        const _password = process.env.ADMIN_PASSWORD;
        if (_username !== username || _password !== password)
            throw new RequestError(401, 'Incorrect username or password');

        setCookie(
            COOKIE_KEY,
            JSON.stringify({ type: 'admin' }),
            { req, res, maxAge: 60 * 60 * 24 }
        );
        return { userType: 'admin' };
    }
    else throw new RequestError(400, 'Invalid user type');
}

export default normalize(handler, { protect: false });