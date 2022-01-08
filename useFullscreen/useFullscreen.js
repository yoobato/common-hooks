import { useRef } from "react";

// const { element, enterFullscreen, exitFullscreen } = useFullscreen((isFull) => console.log("Is Full?", isFull));
// <div ref={element} style={{ width: "400px", height: "300px", backgroundColor: "blue" }}>
//     <button onClick={exitFullscreen}>Exit Fullscreen</button>
// </div>
// <button onClick={enterFullscreen}>Enter Fullscreen</button>
export const useFullscreen = (onFullscreen) => {
    const element = useRef();
  
    const runCallback = (isFull) => {
        if (onFullscreen && typeof onFullscreen === "function") {
            onFullscreen(isFull);
        }
    };
  
    const enterFullscreen = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                // Firefox
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                // Opera
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                // Microsoft
                element.current.msRequestFullscreen();
            }
  
            runCallback(true);
        }
    };
  
    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
  
        runCallback(false);
    };
  
    return { element, enterFullscreen, exitFullscreen };
};
