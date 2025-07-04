import React, { useEffect, useState } from "react";

const ArrowUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        window.scrollBy(0, -20);
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      aria-label="Scroll to top"
      className={`fixed bottom-3 right-3 w-9 h-9 md:w-10 md:h-10 bg-[#1bd421] text-white rounded-full flex items-center justify-center z-[9999] shadow-md transition-all duration-300
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        } hover:bg-[#1eac25] hover:-translate-y-1 active:translate-y-0.5`}
    >
      <i className="fas fa-arrow-up text-sm md:text-base"></i>
    </button>
  );
};

export default ArrowUp;
