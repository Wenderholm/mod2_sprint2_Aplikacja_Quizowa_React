import React from "react";
import { useState } from "react";

export default function Button({
  onClick,
  children,
  style = {},
  disabled = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle = {
    backgroundColor: isHovered ? "#dceeff" : "#f6dadaff",
    padding: "10px 16px",
    borderRadius: 8,
    border: "none",
    fontSize: 16,
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
    ...style,
  };

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
