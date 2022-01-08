import { useState, useEffect } from "react";

// const status = useNetwork((isOnline) => console.log("Is Online?", isOnline));
// <h1>{status ? "Online" : "Offline"}</h1>
export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);

    return status;
};
