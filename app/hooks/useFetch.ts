import React from 'react';
import { RequestError, SuccessfulRequest } from 'utils/response_normalize';
import useLoadingIndicator from './with_provider/useLoadingIndicator';

interface FetchOptions {
    fetchOnMount?: boolean;
}

export default function useFetch(
    url: string,
    options: FetchOptions = { fetchOnMount: true }) {
    const [data, setData] = React.useState<SuccessfulRequest | null>(null);
    const [error, setError] = React.useState<RequestError | null>(null);
    const loadingIndicator = useLoadingIndicator();

    const get = React.useCallback(async () => {
        loadingIndicator.show();
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
            setData(json);
        } else {
            setError(json);
        }
        loadingIndicator.hide();
        return json;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (options.fetchOnMount) get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        error,
        get
    };
}