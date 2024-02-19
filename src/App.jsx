import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Signin from "./Pages/Signin/Signin";
import Register from "./Pages/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Signin />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </>
  );
}
