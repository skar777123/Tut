import "./App.css";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Register/>
    </div>
  );
}

export default App;
