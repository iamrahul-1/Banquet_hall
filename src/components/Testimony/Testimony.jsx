import React from "react";
import "./Testimony.css";
import Card from "./Card";

export default function Testimony() {
  return (
    <>
      <h1 className="heading">Testimony</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
