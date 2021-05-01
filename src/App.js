import "./styles.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import GetAPIData from "./components/GetAPIData";
import ShowData from "./components/ShowData";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <GetAPIData />
      <ShowData />
    </div>
  );
}
