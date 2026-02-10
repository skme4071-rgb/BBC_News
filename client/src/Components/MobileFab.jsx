import { useEffect, useRef } from "react";

export default function MobileFab() {
  const fabRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!fabRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 300) {
        fabRef.current.style.opacity = "1";
        fabRef.current.style.transform = "scale(1)";
      } else {
        fabRef.current.style.opacity = "0";
        fabRef.current.style.transform = "scale(0.8)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // পেজ লোড হলে check করতে

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      ref={fabRef}
      className="fixed right-10 bbc-red bottom-10 z-50 rounded-[50%] test-w text-white w-10 h-10  opacity-0 scale-90 transition-all duration-300 r"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>

  );
}
