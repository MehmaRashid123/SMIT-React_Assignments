import React from "react";
import Ball from "../utils/Ball";

const Footer = () => {
  return (
    <div className="relative flex justify-between px-16">

      {/* Left Plant */}
      <img
        src="/plant2.png"
        alt="Plant"
        className="w-44"
      />

      {/* Cropped Footer Man */}
      <div className="h-[220px] overflow-hidden mx-6">
        <img
          src="/footer-man.png"
          alt="Footer Man"
          className="h-96 object-cover ml-72 object-top"
        />
      </div>

      {/* Right Plant */}
      <img
        src="/plant2.png"
        alt="Plant"
        className="w-44"
      />

      {/* Floating Balls (repositioned) */}
      <Ball bgColor="#7bdcb5" className="absolute top-6 left-8" />
      <Ball bgColor="#fb6962" className="absolute top-1/3 right-16" />
      <Ball bgColor="#fb6962" className="absolute bottom-16 left-1/5" />
      <Ball bgColor="#7bdcb5" className="absolute bottom-20 left-1/2" />
      <Ball bgColor="#7bdcb5" className="absolute bottom-10 left-12" />
      <Ball bgColor="#fb6962" className="absolute top-1/3 left-1/4" />

    </div>
  );
};

export default Footer;
