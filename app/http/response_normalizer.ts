import type { NextApiRequest, NextApiResponse } from "next";

export class RequestError {
    success = false;
    code: number;
    message: string;
    constructor(code: number, message: string) {
        this.message = message;
        this.code = code;
    }
}

export class SuccessfulRequest {
    success = true;
    data: any;
    constructor(data: any) {
        this.data = data;
    }
}

export default function normalize(handler: Function) {
    return async function (
        req: NextApiRequest,
        res: NextApiResponse<SuccessfulRequest | RequestError>) {

        try {
            const data = await handler(req);
            return res.status(200).json(new SuccessfulRequest(data));
        } catch (error: any) {
            console.error('ERROR: ', {
                message: error.message,
                origin: req.url,
            });

            if (error.message.includes('E11000')) {
                error.message = 'This email is already in use';
            }
            if (error.message.includes(':')) {
                const idx1 = (error.message as string).indexOf(':');
                const idx2 = (error.message as string).indexOf(':', idx1 + 1);
                const idx3 = (error.message as string).indexOf(',');
                if (idx3 !== -1) error.message = (error.message as string).substring(idx2 + 2, idx3);
                else error.message = (error.message as string).substring(idx2 + 2);
            }
            if (error instanceof RequestError) {
                return res.status(error.code).json(error);
            }

            return res.status(500).json(new RequestError(500, error.message));
        }
    };
}