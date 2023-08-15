import "./Heroimage.css";
import Intro from "../assets/intro.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Intro} alt="intro" />
      </div>
      <div className="content">
        <p>Hi Im Eshan</p>
        <h1>Im Web/React Developer</h1>
      <div>
        <Link to="/project" className="btn">
          Projects
        </Link>

        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Heroimage;
