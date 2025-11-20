import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Dice1, Wallet, RotateCcw } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Roulette() {
  const [coins, setCoins] = useState(1000);   // placeholder
  const [selectedBet, setSelectedBet] = useState(null); // placeholder
  const [result, setResult] = useState(null); // placeholder

  const betOptions = [
    "Red", "Black", "Odd", "Even", "1–18", "19–36"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #F8FFFB, #E8F4F1)",
        fontFamily: "'Poppins', sans-serif",
        color: "#2E2E2E",
        paddingTop: "20px",
      }}
    >
        <Navbar/>
        <Container>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
          style={{
            fontWeight: "900",
            background: "linear-gradient(to right, #5BB79A, #A9C9FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🎡 Roulette
        </motion.h1>

        {/* Coins Display */}
        <div className="d-flex justify-content-center mb-4">
          <Card
            style={{
              padding: "15px 25px",
              borderRadius: "20px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              background: "#FFFFFF",
              border: "none"
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <Wallet color="#5BB79A" />
              <h5 style={{ margin: 0, fontWeight: "700" }}>{coins} Coins</h5>
            </div>
          </Card>
        </div>

        {/* Roulette Wheel Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "linear-gradient(to bottom right, #A9C9FF, #FFBBEC)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
          >
            <Dice1 size={80} color="#FFFFFF" />
          </Card>
        </motion.div>

        {/* Bet Selection */}
        <Card
          className="mb-4"
          style={{
            borderRadius: "20px",
            padding: "20px",
            background: "#FFFFFF",
            border: "none",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h4 style={{ fontWeight: "700", color: "#5BB79A" }}>Place Your Bet</h4>

          <Row className="mt-3 g-2">
            {betOptions.map(bet => (
              <Col xs={6} key={bet}>
                <Button
                  onClick={() => setSelectedBet(bet)}
                  style={{
                    width: "100%",
                    background:
                      selectedBet === bet
                        ? "linear-gradient(to right, #A8E6CF, #BFD7EA)"
                        : "linear-gradient(to right, #BFD7EA, #A8E6CF)",
                    border: "none",
                    color: "#1B1B1B",
                    fontWeight: "700",
                  }}
                >
                  {bet}
                </Button>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Spin Button */}
        <div className="text-center mb-4">
          <Button
            size="lg"
            style={{
              background: "linear-gradient(to right, #A9C9FF, #FFBBEC)",
              border: "none",
              color: "#1B1B1B",
              fontWeight: "700",
              padding: "10px 30px",
            }}
          >
            Spin Wheel
          </Button>
        </div>

        {/* Result Box */}
        <div className="d-flex justify-content-center mb-5">
          <Card
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "#FFFFFF",
              border: "none",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              minWidth: "250px",
              textAlign: "center"
            }}
          >
            {result === null ? (
              <p className="text-muted m-0">Result will appear here...</p>
            ) : (
              <h4 style={{ fontWeight: "700", color: "#5BB79A" }}>{result}</h4>
            )}
          </Card>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <Button
            size="lg"
            style={{
              background: "linear-gradient(to right, #A8E6CF, #BFD7EA)",
              border: "none",
              color: "#1B1B1B",
              fontWeight: "700",
              padding: "10px 30px",
            }}
          >
            <RotateCcw className="me-2" size={18} />
            Reset Bets
          </Button>
        </div>

      </Container>
    </div>
  );
}
