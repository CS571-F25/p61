import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Dice5, Coins, Gamepad2, Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const games = [
    { name: "Blackjack", icon: <Heart size={40} />, color: "linear-gradient(to right, #A8E6CF, #DCEDE1)" },
    { name: "Roulette", icon: <Dice5 size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
    { name: "Slots", icon: <Gamepad2 size={40} />, color: "linear-gradient(to right, #9ED2C6, #C9E4DE)" },
    { name: "Poker", icon: <Coins size={40} />, color: "linear-gradient(to right, #BFD7EA, #A7C7E7)" },
  ];

  let coins;

  if(!sessionStorage.getItem("coins"))
  {
    coins = 0;
  }
  else
  {
    coins = 100;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #F8FFFB, #E8F4F1)",
        color: "#2E2E2E",
        fontFamily: "'Poppins', sans-serif",
      }}
        >
      {/* Header */}
      <header
        className="d-flex justify-content-between align-items-center border-bottom"
        style={{ borderColor: "#DCEDE1" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#5BB79A",
            fontWeight: "900",
            margin: "10px"
          }}
        >
          ♣️Cozy Casino
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#eadb37ff",
            fontWeight: "900",
            margin: 0,
          }}
        >
          Coins: {coins}
        </motion.h1>
        <Button
          style={{
            background: "linear-gradient(to right, #A8E6CF, #BFD7EA)",
            margin: "10px",
            border: "none",
            color: "#1B1B1B",
            fontWeight: "600",
          }}
        >
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <Container className="text-center py-5">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3rem",
            background: "linear-gradient(to right, #9ED2C6, #A9C9FF)",
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
