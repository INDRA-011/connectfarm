import { useState, useEffect } from "react";

const ScrollToBottom = () => {
  const [show, setShow] = useState(false);

  // Detect scroll position
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show button if not at bottom
    setShow(scrollTop + windowHeight < documentHeight - 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!show) return null; // Don't render button if not needed

  return (
    <button
      onClick={scrollToBottom}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "10px 15px",
        borderRadius: "50%",
        backgroundColor: "#078900ff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      ↓
    </button>
  );
};

export default ScrollToBottom;
