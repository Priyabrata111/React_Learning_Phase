//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import TextSubmit from "./components/About";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const removeBg = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
  };
  const toggleMode = (cls) => {
    console.log(cls);
    removeBg();
    try {
      document.body.classList.add("bg-" + cls);
      showAlert(`${cls} Mode Enabled`, "success");
      setTimeout(() => {
        document.title = `TextUtilities - ${cls} Mode`;
      }, 3000);
    } catch (err) {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#020f1cff";
        showAlert("Dark Mode Enabled", "success");
        setInterval(() => {
          document.title = "TextUtilities - Dark Mode";
        }, 3000);
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled", "success");
        setInterval(() => {
          document.title = "TextUtilities - Light Mode";
        }, 3000);
      }
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtilities"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />

        <div id="textFormArea">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter The Text Here"
                  submit="Convert To UpperCase"
                  submit2="Convert To LowerCase"
                  submit3="Convert To Original String"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
