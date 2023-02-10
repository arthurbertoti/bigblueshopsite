import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
const api = axios.create({
    baseURL: 'http://localhost:8080/'
});

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