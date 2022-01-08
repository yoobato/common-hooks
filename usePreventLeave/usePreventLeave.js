// const { enablePrevent, disablePrevent } = usePreventLeave();
// <button onClick={enablePrevent}>Protect</button>
// <button onClick={disablePrevent}>Unprotect</button>
export const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        // For Chrome
        event.returnValue = "";
    };

    const enablePrevent = () => {
        // window가 닫히기 전에 발생하는 이벤트
        window.addEventListener("beforeunload", listener);
    };
    const disablePrevent = () => {
        window.removeEventListener("beforeunload", listener);
    };

    return { enablePrevent, disablePrevent };
};
