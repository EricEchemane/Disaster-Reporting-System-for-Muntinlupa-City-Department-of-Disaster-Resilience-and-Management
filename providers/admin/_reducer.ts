import { adminActions, IAdmin } from ".";

export default function reducer(
    state: IAdmin,
    { type, payload }: { type: adminActions; payload: any; }
) {
    if (type === "set admin") {
        return payload;
    }
    return state;
}