import { useEffect } from "react";

// useBeforeLeave(() => console.log("Please don't leave"));
export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event;
        // 마우스가 창 위로 벗어날 때만 실행 (창 아래로 벗어날 때는 X)
        if (clientY <= 0) {
        onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};
