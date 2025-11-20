import { useState } from "react";
import { Container, Row, Col, Button, Card, NavbarText } from "react-bootstrap";
import { motion } from "framer-motion";
import { Wallet, RefreshCcw } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Blackjack() {
  const [playerCards] = useState([]); // placeholder
  const [dealerCards] = useState([]); // placeholder
  const [coins, setCoins] = useState(1000); // placeholder

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
          ♣️ Blackjack
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

        {/* Dealer Section */}
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
          <h4 style={{ fontWeight: "700", color: "#5BB79A" }}>Dealer</h4>
          <div className="d-flex gap-3 mt-3">
            {dealerCards.length === 0 ? (
              <p className="text-muted">Dealer cards will appear here...</p>
            ) : (
              dealerCards.map((card, i) => <div key={i}>{card}</div>)
            )}
          </div>
        </Card>

        {/* Player Section */}
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
          <h4 style={{ fontWeight: "700", color: "#5BB79A" }}>Your Hand</h4>
          <div className="d-flex gap-3 mt-3">
            {playerCards.length === 0 ? (
              <p className="text-muted">Your cards will appear here...</p>
            ) : (
              playerCards.map((card, i) => <div key={i}>{card}</div>)
            )}
          </div>
        </Card>

        {/* Controls */}
        <Row className="text-center mb-5">
          <Col>
            <Button
              size="lg"
              style={{
                background: "linear-gradient(to right, #A8E6CF, #BFD7EA)",
                color: "#1B1B1B",
                border: "none",
                fontWeight: "700",
                width: "150px",
              }}
            >
              Hit
            </Button>
          </Col>

          <Col>
            <Button
              size="lg"
              style={{
                background: "linear-gradient(to right, #BFD7EA, #A8E6CF)",
                color: "#1B1B1B",
                border: "none",
                fontWeight: "700",
                width: "150px",
              }}
            >
              Stand
            </Button>
          </Col>

          <Col>
            <Button
              size="lg"
              style={{
                background: "linear-gradient(to right, #A9C9FF, #FFBBEC)",
                color: "#1B1B1B",
                border: "none",
                fontWeight: "700",
                width: "150px",
              }}
            >
              Double
            </Button>
          </Col>
        </Row>

        {/* New Game Button */}
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
            <RefreshCcw className="me-2" size={18} />
            New Game
          </Button>
        </div>

      </Container>
    </div>
  );
}
