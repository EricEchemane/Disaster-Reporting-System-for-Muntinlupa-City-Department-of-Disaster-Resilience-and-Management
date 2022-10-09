export default class Http {
    static post = async (url: string, payload: any, {
        onFail = (message: string) => { },
        onSuccess = (data: any) => { },
    } = {}) => {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const json = await res.json();
        if (res.ok) onSuccess(json);
        else onFail(json.message);
        return json;
    };
}