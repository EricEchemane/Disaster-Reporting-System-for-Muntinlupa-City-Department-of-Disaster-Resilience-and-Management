import normalize from "http/response_normalizer";
import sendSms from "lib/sms";

async function handler() {
    try {
        const res = await sendSms('Hello world from DDRM Muntinlupa');
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return { error };
    }
}

export default normalize(handler);