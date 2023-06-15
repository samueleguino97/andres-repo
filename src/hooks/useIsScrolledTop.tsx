"use client";
import { useEffect, useState } from "react";

export function useIsScrolledTop() {
  const [isScrolledAllTheWayUp, setIsScrolledAllTheWayUp] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsScrolledAllTheWayUp(false);
    } else {
      setIsScrolledAllTheWayUp(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isScrolledAllTheWayUp;
}
