import smsService from '@utils/iwilio';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { to, body } = JSON.parse(req.body);
    if (!to || !body) {
        res.status(400).json({ message: 'Missing phone number or body' });
    }

    const message = await smsService.sendSms(to, body);
    res.status(200).json({ success: true, message });
}
