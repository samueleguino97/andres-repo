import Image from "next/image";
import React from "react";

import Logo from "../assets/logo.svg";
import BurgerSvg from "../assets/burger.svg";
function Header({ color = "normal" }: { color: "purple" | "normal" }) {
  return (
    <header className="flex items-center absolute top-0 left-0 justify-between w-full px-5 py-3">
      {color === "normal" ? (
        <Image className="  md:w-16 w-8  " src={Logo} alt={""} />
      ) : (
        <svg
          className="md:w-16 w-8"
          viewBox="0 0 66 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="19.764"
            height="68.297"
            rx="9.882"
            transform="matrix(0.971739 0.236057 -0.38985 0.920878 26.6255 0.705261)"
            fill="#7400AA"
          />
          <rect
            width="19.764"
            height="68.297"
            rx="9.882"
            transform="matrix(-0.971739 0.236057 0.38985 0.920878 39.3745 0)"
            fill="#8B00CD"
          />
        </svg>
      )}
      <Image className="md:w-16 " src={BurgerSvg} alt={""} />
    </header>
  );
}

export default Header;
