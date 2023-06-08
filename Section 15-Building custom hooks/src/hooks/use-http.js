import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfiq, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfiq.url, {
                method: requestConfiq.method ? requestConfiq.method : "GET",
                headers: requestConfiq.headers ? requestConfiq.headers : {},
                body: requestConfiq.body ? JSON.stringify(requestConfiq.body) : null,
            });

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
