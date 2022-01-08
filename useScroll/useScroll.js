import { useState, useEffect } from "react";

// const { y } = useScroll();
// <h1 style={{ color: y > 200 ? "red" : "blue" }}>Hello</h1>
export const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
  
    const onScroll = () => {
        setState({ x: window.scrollX, y: window.scrollY });
    };
  
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    return state;
  };
