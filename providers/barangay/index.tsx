import { IBarangay } from "entities/barangay.entity";
import { createContext, useContext, useReducer } from "react";
import reducer from "./_reducer";

const BarangayContext = createContext<any>(null);

export type userActions = "set barangay";

interface IBarangayContext {
    state: IBarangay,
    dispatch: ({ type, payload }: { type: userActions, payload: any; }) => {};
}

export const useBarangayContext = () => useContext<IBarangayContext>(BarangayContext);

// const initialValues: IBarangay = {
//     name: '',
//     password: '',
//     reportedIncidents: [],
//     createdAt: new Date(),
//     updatedAt: new Date(),
// };

export default function BarangayProvider(props: { children: JSX.Element; }) {
    const context = useReducer(reducer, undefined);
    return (
        <BarangayContext.Provider value={context}>
            {props.children}
        </BarangayContext.Provider>
    );
}