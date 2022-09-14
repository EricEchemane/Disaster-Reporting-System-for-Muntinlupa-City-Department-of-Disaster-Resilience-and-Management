import { IBarangay } from "entities/barangay.entity";
import { userActions } from ".";

export default function reducer(
    state: IBarangay,
    { type, payload }: { type: userActions; payload: any; }
) {
    if (type === "set barangay") {
        return payload;
    }
    return state;
}