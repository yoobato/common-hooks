import { useRef, useEffect } from "react";

// const fadeInH1 = useFadeIn(2, 1);
// <h1 {...fadeInH1}>Hello</h1>
export const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    return { ref: element, style: { opacity: 0 } };
};
