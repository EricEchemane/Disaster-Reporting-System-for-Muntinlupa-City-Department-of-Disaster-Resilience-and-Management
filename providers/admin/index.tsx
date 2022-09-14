import { IBarangay } from "entities/barangay.entity";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "./_reducer";

const AdminContext = createContext<any>(null);

export type adminActions = "set admin";

export interface IAdmin {
    barangays: IBarangay[],
}

interface IAdminContext {
    state: IAdmin,
    dispatch: ({ type, payload }: { type: adminActions, payload: any; }) => {};
}

export const useAdminContext = () => useContext<IAdminContext>(AdminContext);

export default function AdminProvider(props: { children: JSX.Element; }) {
    const context = useReducer(reducer, undefined);
    return (
        <AdminContext.Provider value={context}>
            {props.children}
        </AdminContext.Provider>
    );
}