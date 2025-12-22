import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/signup";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
            <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
