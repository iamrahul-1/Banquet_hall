import React from "react";

import "./offers.css";

import offer from "../../assets/offers.png";

export default function Offers() {
  return (
    <div className="offer-container">
      <img className="offer-img" src={offer} alt="offers" />

      <button className="button-73">Book Now</button>
    </div>
  );
}
