import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" lets us indicate where we want to be placed (scrolled to)
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "Instant" lets us skip the animation and land directly at the top
    });
  }, [pathname]);

  return null;
}