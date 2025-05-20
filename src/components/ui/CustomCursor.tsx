import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverHeader, setIsOverHeader] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) return;

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // Check if cursor is over header
      const header = document.querySelector("header");
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsOverHeader(
          e.clientY >= headerRect.top && e.clientY <= headerRect.bottom
        );
      }
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    // Track hover state for links and buttons
    const handleMouseOverElements = () => {
      const elements = document.querySelectorAll("a, button");

      elements.forEach((element) => {
        element.addEventListener("mouseenter", () => setIsHovering(true));
        element.addEventListener("mouseleave", () => setIsHovering(false));
      });

      return () => {
        elements.forEach((element) => {
          element.removeEventListener("mouseenter", () => setIsHovering(true));
          element.removeEventListener("mouseleave", () => setIsHovering(false));
        });
      };
    };

    // Track header scroll state
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 0);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    const cleanup = handleMouseOverElements();

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cleanup();
    };
  }, [isTouchDevice]);

  if (isTouchDevice || !visible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ${
        isHovering ? "scale-150" : "scale-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`w-4 h-4 rounded-full transition-colors duration-200 ${
          isOverHeader && isHeaderScrolled ? "bg-gray-900" : "bg-gray-900"
        } opacity-90`}
      ></div>
    </div>
  );
};

export default CustomCursor;
