import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";


export default function Poker() {
  const [playerHand, setPlayerHand] = useState(["🂠", "🂠"]);
  const [dealerHand, setDealerHand] = useState(["🂠", "🂠"]);
  const [message, setMessage] = useState("Place your bet to begin!");

  function dealCards() {
    // placeholder logic you will replace
    setPlayerHand(["🂡", "🂱"]); // random placeholders
    setDealerHand(["🂠", "🂠"]);
    setMessage("Cards dealt! Hit or Stand?");
  }

  function hit() {
    // placeholder
    setMessage("Hit taken (placeholder)");
  }

  function stand() {
    // placeholder
    setDealerHand(["🂮", "🂾"]); // placeholder
    setMessage("Dealer reveals cards! (placeholder)");
  }

  function reset() {
    setPlayerHand(["🂠", "🂠"]);
    setDealerHand(["🂠", "🂠"]);
    setMessage("Place your bet to begin!");
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
          Poker
        </motion.h2>

        {/* Game Card */}
        <Card
          style={{
            width: "90%",
            maxWidth: "700px",
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

          <Card.Body style={{ padding: "30px" }}>
            {/* Dealer Section */}
            <h4
              style={{
                fontWeight: "700",
                color: "#5BB79A",
                marginBottom: "15px",
              }}
            >
              Dealer
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {dealerHand.map((card, i) => (
                <div
                  key={i}
                  style={{
                    width: "80px",
                    height: "110px",
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    border: "2px solid #DCEDE1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "45px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                  }}
                >
                  {card}
                </div>
              ))}
            </div>

            {/* Player Section */}
            <h4
              style={{
                fontWeight: "700",
                color: "#5BB79A",
                marginBottom: "15px",
              }}
            >
              Player
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              {playerHand.map((card, i) => (
                <div
                  key={i}
                  style={{
                    width: "80px",
                    height: "110px",
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    border: "2px solid #DCEDE1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "45px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                  }}
                >
                  {card}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ marginBottom: "25px" }}>
              <Button
                onClick={dealCards}
                style={{
                  background: "linear-gradient(to right, #BFD7EA, #A8E6CF)",
                  border: "none",
                  color: "#1B1B1B",
                  fontWeight: "700",
                  padding: "8px 25px",
                  marginRight: "10px",
                }}
              >
                Deal
              </Button>

              <Button
                onClick={hit}
                style={{
                  background: "linear-gradient(to right, #A9C9FF, #FFBBEC)",
                  border: "none",
                  color: "#1B1B1B",
                  fontWeight: "700",
                  padding: "8px 25px",
                  marginRight: "10px",
                }}
              >
                Hit
              </Button>

              <Button
                onClick={stand}
                style={{
                  background: "linear-gradient(to right, #A8E6CF, #BFD7EA)",
                  border: "none",
                  color: "#1B1B1B",
                  fontWeight: "700",
                  padding: "8px 25px",
                }}
              >
                Stand
              </Button>
            </div>

            {/* Reset Button */}
            <Button
              variant="light"
              onClick={reset}
              style={{
                background: "#FFFFFF",
                border: "2px solid #DCEDE1",
                color: "#1B1B1B",
                fontWeight: "600",
                padding: "6px 20px",
                borderRadius: "12px",
              }}
            >
              Reset
            </Button>

            {/* Message */}
            <p
              style={{
                marginTop: "25px",
                fontSize: "1.3rem",
                fontWeight: "700",
                background: "linear-gradient(to right, #5BB79A, #A9C9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                minHeight: "30px",
              }}
            >
              {message}
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
