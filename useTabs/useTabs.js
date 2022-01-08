import { useState } from "react";

// const content = [
//     {
//         tab: "Section 1",
//         content: "This is content of Section 1"
//     },
//     {
//         tab: "Section 2",
//         content: "This is content of Section 2"
//     }
// ];
// const { curTab, changeTab } = useTabs(0, content);
// <div>{content.map((tab, index) => <button onClick={() => changeTab(index)}>{tab.tab}</button>)}</div>
// <div>{curTab.content}</div>
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
