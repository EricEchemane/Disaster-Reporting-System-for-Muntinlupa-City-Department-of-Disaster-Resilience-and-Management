import twilio from "twilio";

class SmsService {
    client: twilio.Twilio;
    constructor() {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        if (!accountSid || !authToken) {
            throw new Error('TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN not found');
        }
        this.client = twilio(accountSid, authToken);
    }

    async sendSms(to: string, body: string) {
        if (!to.startsWith('+63')) throw new Error('Phone number must start with +63');
        if (to.length !== 13) throw new Error('Phone number must be 13 characters long');

        const message = await this.client.messages
            .create({
                messagingServiceSid: 'MG3d378acfe05eb909fc4ed70208c56b6e',
                to: to,
                body: body,
            });

        return message;
    }
}

const smsService = new SmsService();
export default smsService;