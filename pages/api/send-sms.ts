import smsService from 'utils/iwilio';
import type { NextApiRequest, NextApiResponse } from 'next';
import normalize, { RequestError } from 'http_adapters/response-normalizer';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { to, body } = JSON.parse(req.body);
    if (!to || !body) throw new RequestError(400, 'Missing phone number or body');

    const message = await smsService.sendSms(to, body);
    return message;
}
export default normalize(handler);