import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="address">
          <h1>Address</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            similique tempora, ipsum earum, quo dignissimos!
          </p>
        </div>
        <div className="social">
          <h1>Social Media</h1>
          <p>facebook</p>
          <p>instagram</p>
          <p>whatsapp</p>
        </div>

        <div>
          <h1>contact</h1>
          <p className="phone">email : xewoji@aisle.com</p>
        </div>
      </div>
      <p className="copy">©Shivchand Marriage Hall 2024</p>
    </div>
  );
}
