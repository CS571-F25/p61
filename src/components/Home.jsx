import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col, NavbarCollapse } from "react-bootstrap";
import { Dice5, Coins, Gamepad2, Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar"


export default function Home() {
  const games = [
    { name: "Blackjack", icon: <Heart size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
    { name: "Roulette", icon: <Dice5 size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
    { name: "Slots", icon: <Gamepad2 size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
    { name: "Poker", icon: <Coins size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
  ];

  let coins;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #F8FFFB, #E8F4F1)",
        color: "#2E2E2E",
        fontFamily: "'Poppins', sans-serif",
      }}>
      
      <Navbar/>

      {/* Hero Section */}
      <Container className="text-center py-5">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3rem",
            background: "linear-gradient(to right, #5BB79A  , #A9C9FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
          }}
        >
          Welcome to the Cozy Casino
        </motion.h2>
        <p className="text-muted mb-4" style={{ fontSize: "1.2rem" }}>
          Play your favorite casino games, without the risk!
        </p>
        <Button
          size="lg"
          style={{
            background: "linear-gradient(to right, #BFD7EA, #A8E6CF)",
            border: "none",
            color: "#1B1B1B",
            fontWeight: "700",
            boxShadow: "0 0 10px rgba(155, 220, 203, 0.6)",
          }}
        >
          Start Playing
        </Button>
      </Container>

      {/* Games Grid */}
      <Container className="pb-5">
        <Row xs={1} sm={2} lg={4} className="g-4">
          {games.map((game, idx) => (
            <Col key={game.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card
                  className="text-center border-0"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div style={{ height: "5px", background: game.color }} />
                  <Card.Body>
                    <div className="mb-3" style={{ color: "#5BB79A" }}>
                      {game.icon}
                    </div>
                    <Card.Title style={{ fontSize: "1.4rem", fontWeight: "700" }}>{game.name}</Card.Title>
                    <Button
                      style={{
                        background: game.color,
                        border: "none",
                        color: "#1B1B1B",
                        fontWeight: "600",
                        marginTop: "10px",
                      }}
                    >
                      Play Now
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
