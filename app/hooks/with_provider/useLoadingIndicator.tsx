import { LinearProgress } from "@mui/material";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

const LoadingIndicatorContext = createContext<any>(null);

const useLoadingIndicator = () => useContext<{
    show: () => void;
    hide: () => void;
    isVisible: boolean;
}>(LoadingIndicatorContext);

export default useLoadingIndicator;

export const LoadingIndicatorProvider = (props: { children: JSX.Element; }) => {
    const [isVisible, setVisibility] = useState(false);
    const show = () => setVisibility(true);
    const hide = () => setVisibility(false);
    return <LoadingIndicatorContext.Provider value={{ isVisible, show, hide }}>
        {isVisible && <LinearProgress />}
        {props.children}
    </LoadingIndicatorContext.Provider>;
};