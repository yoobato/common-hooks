import { useRef, useEffect } from "react";

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
