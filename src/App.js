import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TextSubmit from "./components/ThemeToggle";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };
  return (
    <>
      <Navbar
        title="TextUtilities"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <div id="textFormArea">
        <TextForm
          heading="Enter The Text Here"
          submit="Convert To UpperCase"
          submit2="Convert To LowerCase"
          submit3="Convert To Original String"
        />
      </div>
    </>
  );
}
export default App;
