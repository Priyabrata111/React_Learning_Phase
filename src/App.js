import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TextSubmit from "./components/ThemeToggle";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";
import Alert from "./components/Alret";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#004080";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtilities"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div id="textFormArea">
        <TextForm
          heading="Enter The Text Here"
          submit="Convert To UpperCase"
          submit2="Convert To LowerCase"
          submit3="Convert To Original String"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}
export default App;
