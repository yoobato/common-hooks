import { useRef, useEffect } from "react";

// const title = useHover(() => console.log("Hovered"));
// <h1 ref={title}>Hello World</button>
export const useHover = (onHover) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);

    return element;
};
