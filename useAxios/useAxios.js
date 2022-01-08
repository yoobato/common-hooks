import { useEffect, useState } from "react";
import defaultAxios from "axios";

// const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
// console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
// <button onClick={refetch}>Refetch</button>
export const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    });

    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
        ...state,
        loading: true
        });
        setTrigger(Date.now());
    };

    if (!options.url) {
        return;
    }

    useEffect(() => {
        axiosInstance(options)
        .then((data) => {
            setState({
            ...state,
            loading: false,
            data
            });
        })
        .catch((error) => {
            setState({
            ...state,
            loading: false,
            error
            });
        });
    }, [trigger]);

    return { ...state, refetch };
};
