import "./about.css";
import BH from "../../assets/Logo.png";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="golden"></div>
        <h1 className="text">About</h1>
        <img src={BH} alt="" className="img" />
        <div className="red"></div>
        <div className="text-container">
          <p className="about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            ab id nisi. Corrupti voluptates, laboriosam, illo voluptatem
            veritatis voluptas ex minus quae odit quas cumque odio,
            reprehenderit fuga libero consequatur.
          </p>
        </div>
      </div>
    </>
  );
}
