import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <div
      onClick={toggle}
      style={{
        width: "70px",
        height: "36px",
        background: "transparent",
        border: "1px solid #444",
        borderRadius: "999px",
        display: "flex",
        alignItems: "center",
        padding: "4px",
        position: "relative",
        cursor: "pointer",
        justifyContent: "space-between",
      }}
    >
      {/* Sun icon */}
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: !isDark ? "#fff" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: !isDark ? "#111" : "#777",
          transition: "all 0.3s ease",
        }}
      >
        <FontAwesomeIcon icon={faSun} size="sm" />
      </div>

      {/* Moon icon */}
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: isDark ? "#fff" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isDark ? "#111" : "#777",
          transition: "all 0.3s ease",
        }}
      >
        <FontAwesomeIcon icon={faMoon} size="sm" />
      </div>
    </div>
  );
};

export default ToggleButton;
