"use client";
import Image from "next/image";
import React from "react";
import ScrollCircleSvg from "./assets/scroll-circle.svg";

function ScrollButton() {
  return (
    <Image
      onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }}
      src={ScrollCircleSvg}
      alt=" "
      className=" absolute bottom-11 left-1/2 -translate-x-1/2"
    />
  );
}

export default ScrollButton;
