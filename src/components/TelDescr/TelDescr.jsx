import React from "react";
import descr from "../../images/descr.png";
import Description from "../Description/Description";
import Button from "../Button/Button";
import "./TelDescr.css";
const TelDescr = () => {
  return (
    <div className="grid grid-cols-2">
      <img src={descr} alt="" />
      <div className="container mx-auto px-8  ">
        <div className="mt-96 ml-300 width">
          <Description />
          <div className = "ml-12">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelDescr;
