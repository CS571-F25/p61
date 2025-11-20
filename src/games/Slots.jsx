import { motion } from "framer-motion";
import { Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

export default function Slots() {
  const [slots, setSlots] = useState(["🎰", "🎰", "🎰"]);
  const [result, setResult] = useState("");

  function spin() {
    // Placeholder — you will implement logic later
    setSlots(["❓", "❓", "❓"]);
    setResult("Spinning...");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #F8FFFB, #E8F4F1)",
        paddingTop: "40px",
        fontFamily: "'Poppins', sans-serif",
        color: "#2E2E2E",
      }}
    >
        <Navbar/>
        <Container className="text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            background: "linear-gradient(to right, #5BB79A, #A9C9FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "40px",
          }}
        >
          Slots
        </motion.h2>

        {/* Machine Card */}
        <Card
          style={{
            width: "80%",
            maxWidth: "500px",
            margin: "0 auto",
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              height: "6px",
              background: "linear-gradient(to right, #A9C9FF, #FFBBEC)",
            }}
          />

          <Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "25px",
              }}
            >
              {slots.map((symbol, i) => (
                <div
                  key={i}
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#FFFFFF",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "45px",
                    border: "2px solid #DCEDE1",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {symbol}
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={spin}
              style={{
                background: "linear-gradient(to right, #BFD7EA, #A8E6CF)",
                border: "none",
                color: "#1B1B1B",
                fontWeight: "700",
                padding: "10px 30px",
                boxShadow: "0 0 10px rgba(155, 220, 203, 0.6)",
              }}
            >
              Spin 🎲
            </Button>

            <p
              style={{
                marginTop: "20px",
                fontSize: "1.3rem",
                fontWeight: "600",
                background: "linear-gradient(to right, #5BB79A, #A9C9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                minHeight: "30px",
              }}
            >
              {result}
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
