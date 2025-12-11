import { useState } from "react";
import { Container, Row, Col, Button, Card, NavbarText } from "react-bootstrap";
import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import Navbar from "../components/Navbar";
import BlackjackGame from "./BlackjackGame";
import { useCoins } from "../context/CoinContext";

export default function Blackjack() {

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif"
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
            marginTop: 20,
            fontWeight: "900",
            background: "#3C8269",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ♣️ Blackjack
        </motion.h1>

        <BlackjackGame/>

      </Container>
    </div>
  );
}
