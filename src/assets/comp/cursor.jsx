import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add("w-12 h-12").remove("w-4 h-4");
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove("w-12 h-12").add("w-4 h-4");
    };

    const clickableElements = document.querySelectorAll(
      "a, button, [role='button']",
    );
    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <>
      <div className="cursor fixed z-[9999] top-0 left-0 w-4 h-4 bg-[#ff4800] opacity-75 rounded-full pointer-events-none"></div>
    </>
  );
}
