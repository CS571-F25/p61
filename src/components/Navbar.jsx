import React from "react";
import { useNavigate } from "react-router";

export default function Navbar(props) {
  const navigate = useNavigate();

  const navButton = {
    cursor: "pointer",
    padding: "8px 14px",
    borderRadius: "12px",
    fontWeight: "600",
    color: "#FFFFFF",
    background: "#3C8269",
    border: "none",
  };

  return (
    <div
      style={{
        width: "100%",
        borderBottom: "2px solid #DCEDE1",
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* LEFT: Logo */}
      <span
        onClick={() => navigate("/")}
        style={{
          fontSize: "1.8rem",
          fontWeight: "900",
          cursor: "pointer",
          background: "#3C8269",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ♣️ Simply Casino
      </span>

      {/* RIGHT: Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <button onClick={() => {navigate("/blackjack")}} style={navButton}>
          Blackjack
        </button>

        <button onClick={() => navigate("/roulette")} style={navButton}>
          Roulette
        </button>

        <button onClick={() => navigate("/slots")} style={navButton}>
          Slots
        </button>
      </div>
    </div>
  );
}
