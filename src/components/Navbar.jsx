import React from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const navButton = {
    cursor: "pointer",
    padding: "8px 14px",
    borderRadius: "12px",
    fontWeight: "600",
    color: "#1B1B1B",
    background: "linear-gradient(to right, #A8E6CF, #BFD7EA)",
    border: "none",
    transition: "0.25s ease",
    boxShadow: "0 0 6px rgba(155, 220, 203, 0.4)",
  };

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(to right, #F8FFFB, #E8F4F1)",
        borderBottom: "2px solid #DCEDE1",
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
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
          background: "linear-gradient(to right, #5BB79A, #A9C9FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ♣️ Cozy Casino
      </span>

      {/* RIGHT: Buttons */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <button onClick={() => navigate("/blackjack")} style={navButton}>
          Blackjack
        </button>

        <button onClick={() => navigate("/roulette")} style={navButton}>
          Roulette
        </button>

        <button onClick={() => navigate("/slots")} style={navButton}>
          Slots
        </button>

        <button onClick={() => navigate("/poker")} style={navButton}>
          Poker
        </button>

        <button
          onClick={() => navigate("/signin")}
          style={{
            ...navButton,
            fontWeight: "700",
            padding: "8px 18px",
            boxShadow: "0 0 10px rgba(155, 220, 203, 0.6)",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
