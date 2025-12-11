import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col, NavbarCollapse } from "react-bootstrap";
import { Dice5, Coins, Gamepad2, Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar"
import { useState } from "react";
import { useNavigate } from "react-router";




export default function Home() {
  const games = [
    { name: "Blackjack", icon: <Heart size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
    { name: "Roulette", icon: <Dice5 size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
    { name: "Slots", icon: <Gamepad2 size={40} />, color: "linear-gradient(to right, #A9C9FF, #FFBBEC)" },
  ];

  const navButton = {
    cursor: "pointer",
    padding: "8px 14px",
    borderRadius: "12px",
    fontWeight: "600",
    color: "#FFFFFF",
    background: "#3C8269",
    border: "none",
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}>
      
      <Navbar/>

      {/* Hero Section */}
      <Container className="text-center py-5">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3rem",
            background: "#3C8269 ",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
          }}
        >
          Welcome to the Simply Casino
        </motion.h1>
      </Container>

      {/* Games Grid */}
      <Container className="pb-5">
        <Row xs={1} sm={2} lg={4} className="g-4 justify-content-center">
          {games.map((game, idx) => (
            <Col key={game.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Card.Body>
                    <div className="mb-3" style={{ color: "#3C8269" }}>
                      {game.icon}
                    </div>
                    <Card.Title style={{ fontSize: "1.4rem", fontWeight: "700" }}>{game.name}</Card.Title>
                    <Button style = {{
                      ...navButton, 
                      marginTop: 20}}
                      onClick = {() => { navigate("/" + game.name.toLowerCase())}}>
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
