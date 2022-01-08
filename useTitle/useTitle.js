import { useState, useEffect } from "react";

// const titleUpdater = useTitle("Loading...");
// titleUpdater("Home");
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
};
