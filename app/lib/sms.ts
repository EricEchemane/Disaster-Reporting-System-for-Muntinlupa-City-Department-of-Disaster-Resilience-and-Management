import Sms77Client, { SmsParams } from "sms77-client";

const key = process.env.SMS77_API_KEY;

if (!key) throw new Error('No sms77 api key provided');

const smsClient = new Sms77Client(key);

export default async function sendSms(message: string) {
    const params: SmsParams = {
        text: message,
        to: "+639695948292"
    };
    const res = await smsClient.sms(params);
    return res;
}