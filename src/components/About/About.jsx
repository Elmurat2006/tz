import React from "react";
import svg from "../../images/undraw_mobile_app_0irr.svg";
import "./About.css";
import Description from "../Description/Description"
const About = () => {
  return (
    <div className="container mx-auto px-8 grid grid-cols-2 gap-2 mt-72 mb-72">
      <img src={svg} alt="" />
      <Description />
    </div>
  );
};

export default About;
