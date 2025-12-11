import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Wallet, RotateCcw } from "lucide-react";
import Navbar from "../components/Navbar";
import RouletteWheel from "./RouletteWheel";
import RouletteGameBoard from "./RouletteGameBoard";
import { useCoins } from "../context/CoinContext";
import BetButtons from "./BetButtons";



const RED_NUMBERS = new Set([
  1, 3, 5, 7, 9,
  12, 14, 16, 18,
  19, 21, 23, 25, 27,
  30, 32, 34, 36,
]);

function getColor(num) {
  if (num === 0) return "Green";
  return RED_NUMBERS.has(num) ? "Red" : "Black";
}

function isWinningBet(bet, num, color) {
  switch (bet) {
    case "Red":
      return color === "Red";
    case "Black":
      return color === "Black";
    case "Odd":
      return num !== 0 && num % 2 === 1;
    case "Even":
      return num !== 0 && num % 2 === 0;
    case "1–18":
      return num >= 1 && num <= 18;
    case "19–36":
      return num >= 19 && num <= 36;
    default:
      return false;
  }
}

export default function Roulette() {
  const [BET_AMOUNT, setBet] = useState(10);
  
  const { coins, setCoins } = useCoins();
  const [selectedBet, setSelectedBet] = useState(null);
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastNumber, setLastNumber] = useState(null);

  const betOptions = ["Red", "Black", "Odd", "Even", "1–18", "19–36"];

  function handleSpin() {
    if (isSpinning) return;

    if (!selectedBet) {
      setResult("Please select a bet before spinning!");
      return;
    }

    if (coins < BET_AMOUNT) {
      setResult("Not enough coins to spin.");
      return;
    }

    setCoins((c) => c - BET_AMOUNT);
    setIsSpinning(true);
    setResult("Spinning...");

    setTimeout(() => {
      const spunNumber = Math.floor(Math.random() * 37); // 0–36
      const color = getColor(spunNumber);
      const win = isWinningBet(selectedBet, spunNumber, color);

      setLastNumber(spunNumber);

      if (win) {
        setCoins((c) => c + BET_AMOUNT * 2);
        setResult(
          `🎉 Ball landed on ${spunNumber} (${color}). You WON ${BET_AMOUNT} coins on "${selectedBet}"!`
        );
      } else {
        setResult(
          `💸 Ball landed on ${spunNumber} (${color}). You lost ${BET_AMOUNT} coins on "${selectedBet}".`
        );
      }

      setIsSpinning(false);
    }, 1000);
  }

  function handleReset() {
    setSelectedBet(null);
    setResult(null);
    setLastNumber(null);
    setBet(10)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        color: "#2E2E2E",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Container
        className="py-3"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title + coins */}
        <Row className="align-items-center mb-3">
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "2.4rem",
                fontWeight: "900",
                margin: 0,
                background: "#3C8269",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🎡 Roulette
            </motion.h1>
            <p
              style={{
                margin: 0,
                marginTop: 4,
                opacity: 0.7,
                fontSize: "0.9rem",
              }}
            >
              Place your bet and spin the wheel!
            </p>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-md-end justify-content-center"
          >
            <Card
              style={{
                padding: "10px 18px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                background: "#FFFFFF",
                border: "none",
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <Wallet color="#3C8269" size={22} />
                <div>
                  <h1 style={{ fontSize: 16, margin: 0, fontWeight: "700" }}>
                    {coins} Coins
                  </h1>
                  <small>
                    Bet per spin: {BET_AMOUNT}
                  </small>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Main content row */}
        <Row
          className="g-3"
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          {/* Left: wheel */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <RouletteWheel isSpinning={isSpinning} lastNumber={lastNumber} />
          </Col>
          <Col className = "d-flex">
            <RouletteGameBoard
            betOptions={betOptions}
            selectedBet={selectedBet}
            onSelectBet={setSelectedBet}
            result={result}
            onSpin={handleSpin}
            onReset={handleReset}
            isSpinning={isSpinning}
            coins={coins}
            betAmount={BET_AMOUNT}
            lastNumber={lastNumber}
            />
            <BetButtons bet = {BET_AMOUNT} setBet = {setBet}/>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
