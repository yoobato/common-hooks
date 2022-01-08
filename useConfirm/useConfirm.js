// 이건 useState, useEffect를 사용하지 않기 때문에 엄밀히 말하면 Hook은 아니다.

// const confirmAction = useConfirm("Are you sure?", () => console.log("Confirmed"), () => console.log("Cancelled"));
// <button onClick={confirmAction}>Delete</button>
export const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }

    return () => {
        if (confirm(message)) {
        onConfirm();
        } else {
        onCancel();
        }
    };
};
