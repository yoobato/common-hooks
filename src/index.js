import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useInput } from "./useinput";
import { useTabs } from "./usetabs";
import { useTitle } from "./usetitle";
import { useClick } from "./useclick";

// Demo
const App = () => {
  const hello = useClick(() => console.log("Say Hello"));

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 3000);

  const nameValidator = (value) => value.length <= 10;
  const name = useInput("Mr.", nameValidator);

  const content = [
    {
      tab: "Section 1",
      content: "This is content of Section 1"
    },
    {
      tab: "Section 2",
      content: "This is content of Section 2"
    }
  ];

  const { curTab, changeTab } = useTabs(0, content);

  return (
    <div className="App">
      <h1 ref={hello}>Hello</h1>
      <input placeholder="Name" {...name} />
      <hr />
      <div>
        {content.map((section, index) => (
          <button onClick={() => changeTab(index)}>{section.tab}</button>
        ))}
      </div>
      <div>{curTab.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
