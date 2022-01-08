import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  const [curIndex, setCurIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    curTab: allTabs[curIndex],
    changeTab: setCurIndex
  };
};
