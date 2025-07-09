import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TextSubmit from "./components/ThemeToggle";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Navbar title="TextUtilities"></Navbar>
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
