import { useEffect } from "react";

export default function WindowScrollTo() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return null; // or <></>
}
