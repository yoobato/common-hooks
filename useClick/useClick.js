import { useRef, useEffect } from "react";

// const btn = useClick(() => console.log("Clicked"));
// <button ref={btn}>Click</button>
export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        // ComponentDidMount, ComponentDidUpdate
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        // ComponentWillUnMount
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    return element;
};
