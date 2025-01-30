// components/GlowButton.js
import React, { useState } from "react";

const GlowButton = () => {
  const [, setIsHovered] = useState(false);
  const [ ,setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: "120px",
          marginTop: "10px",
          height: "40px",
          color: "#000",
          fontWeight: "bold",
          cursor: "pointer",
          position: "relative",
          zIndex: 4,
          borderRadius: "10px",
          border: "2px solid black",
          fontFamily: "sans-serif", // Add this line to change the font family
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        LOG IN
        <div
          style={{
            content: '""',
            background:
              "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
            position: "absolute",
            top: "-2px",
            left: "-2px",
            backgroundSize: "400%",
            zIndex: -1,
            filter: "blur(1px)",
            width: "calc(100% + 4px)",
            height: "calc(100% + 4px)",
            animation: "glowing 20s linear infinite",
            transition: "opacity 0.3s ease-in-out",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: -1,
            borderRadius: "10px",
          }}
        ></div>
      </button>

      <style jsx>{`
        @keyframes glowing {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GlowButton;