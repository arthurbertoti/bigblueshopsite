import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import api from '../services/api';

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url, options)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => setFetching(false));
    }, [url, options, error]);
    return { data, error, isFetching };
}