import "./navigation.css";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [signedIn, setSignedIn] = useState(true);
  const [address, setAddress] = useState("");
  function bookNow(status) {
    if (!signedIn) {
      setAddress("./register");
    } else {
      setAddress("./login");
    }
  }
  return (
    <ul className="nav">
      <div>
        <img className="Logo" src={Logo} alt="Logo" />
      </div>
      <ul className="center">
        <NavLink to="./">
          <li>home</li>
        </NavLink>
        <NavLink to="./about">
          <li>about </li>
        </NavLink>
        <NavLink to="./contact">
          <li>Contact Us </li>
        </NavLink>
      </ul>
      <div className="end">
        <NavLink to="./login">
          <li className="login">login </li>
        </NavLink>
        <NavLink to={address}>
          <li className="bookbtn" onClick={bookNow}>
            Book Now
          </li>
        </NavLink>
      </div>
    </ul>
  );
}
