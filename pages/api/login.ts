import normalize, { RequestError } from "http/response_normalizer";
import { NextApiRequest } from "next";

const brgyCredentials = new Map<string, string>([
    ["alabang", "admin123"],
    ["ayala alabang", "admin123"],
    ["bayanan", "admin123"],
    ["buli", "admin123"],
    ["cupang", "admin123"],
    ["poblacion", "admin123"],
    ["putatan", "admin123"],
    ["sucat", "admin123"],
    ["tunasan", "admin123"],
]);

async function handler(req: NextApiRequest) {
    const { username, password } = req.body;
    if (!username || !password) throw new RequestError(400, "Invalid credentials");

    const brgy = brgyCredentials.get(username);
    if (!brgy) throw new RequestError(400, "Invalid credentials");

    if (brgy !== password) throw new RequestError(400, "Invalid credentials");

    return { username };
}

export default normalize(handler, { protect: false });