// const triggerNotification = useNotification("This is title", { body: "This is body" });
// <button onClick={triggerNotification}>Hello</button>
export const useNotification = (title, options) => {
    const addNotification = () => {
        new Notification(title, options);
    };
  
    return () => {
        if (!("Notification" in window)) {
            return;
        }
  
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    addNotification();
                }
            });
        } else {
            addNotification();
        }
    };
};
