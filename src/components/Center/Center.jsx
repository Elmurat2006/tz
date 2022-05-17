import React from "react";
import "./Center.css";
import Button from "../Button/Button";
import tel from "../../images/phones.png";
import Header from '../Header/Header'
const Center = () => {
  return (
<div className="bg " >
  <Header />
    <div
      className="container mx-auto px-8 "
      style={{ fontFamily: "Rubik", columnCount: "2" }}
    >
      <h1 className="text-white fz-75 font-bold ">
        Secure and Anonymous Cryptocurrency{" "}
      </h1>
      <div className="border-bottom"></div>
      <p className="text-white fz-18 mt-top relative">
        Lymcoin is a decentralized, hybrid blockhain <br /> that is fully
        open-source.{" "}
      </p>

      <Button  />
      
    <div style = {{marginBottom:'440px'}}></div>
      <img src={tel} alt="" style={{ marginLeft: "100px"}} />
    </div>
    </div>
  );
};

export default Center;
