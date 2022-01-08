import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
};
