"use client";
import Image from "next/image";
import React from "react";
import ScrollCircleSvg from "./assets/scroll-circle.svg";
import { useIsScrolledTop } from "./hooks/useIsScrolledTop";

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

export function ScrollTopButton() {
  const isScrolledTop = useIsScrolledTop();
  if (isScrolledTop) {
    return null;
  }
  return (
    <Image
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      src={ScrollCircleSvg}
      alt=" "
      className="fixed bg-black w-2 h-2 bottom-12 left-12"
    />
  );
}

export default ScrollButton;
