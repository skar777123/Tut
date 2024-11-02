import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
// import Login from "./components/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Home from "./components/Home";

//ROuting - router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={localStorage.getItem("profiler") ? <Home /> : <Register />}
          />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/profile"
            element={<Profile title="Ritika Profile" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
