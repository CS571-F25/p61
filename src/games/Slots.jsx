import { motion } from "framer-motion";
import { Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { useCoins } from "../context/CoinContext";

const MACHINES = [
  {
    id: 0,
    name: "Classic Fruits",
    bet: 10,
    symbols: ["🍒", "🍋", "🍊", "🍉", "🔔", "⭐"],
  },
  {
    id: 1,
    name: "Lucky Sevens",
    bet: 15,
    symbols: ["7️⃣", "⭐", "💎", "🍀", "🔥"],
  },
  {
    id: 2,
    name: "Diamond Rush",
    bet: 20,
    symbols: ["💎", "🔷", "🔶", "💠", "✨"],
  },
];

export default function Slots() {
  const [slots, setSlots] = useState(
    MACHINES.map(() => ["🎰", "🎰", "🎰"])
  );
  const [results, setResults] = useState(MACHINES.map(() => ""));
  const [isSpinning, setIsSpinning] = useState(MACHINES.map(() => false));

  const { coins, setCoins } = useCoins();


  function getRandomSymbol(machineIndex) {
    const symbols = MACHINES[machineIndex].symbols;
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function spin(machineIndex) {
    if (isSpinning[machineIndex]) return;

    const bet = MACHINES[machineIndex].bet;

    if (coins < bet) {
      setResults((prev) => {
        const copy = [...prev];
        copy[machineIndex] = "Not enough coins to spin!";
        return copy;
      });
      return;
    }

    // Deduct bet
    setCoins((c) => c - bet);

    setIsSpinning((prev) => {
      const copy = [...prev];
      copy[machineIndex] = true;
      return copy;
    });

    setResults((prev) => {
      const copy = [...prev];
      copy[machineIndex] = "Spinning...";
      return copy;
    });

    let frame = 0;
    const totalFrames = 12;

    const interval = setInterval(() => {
      // Shuffle symbols while spinning
      setSlots((prev) => {
        const copy = [...prev];
        copy[machineIndex] = [
          getRandomSymbol(machineIndex),
          getRandomSymbol(machineIndex),
          getRandomSymbol(machineIndex),
        ];
        return copy;
      });

      frame++;

      if (frame >= totalFrames) {
        clearInterval(interval);

        const finalSlots = [
          getRandomSymbol(machineIndex),
          getRandomSymbol(machineIndex),
          getRandomSymbol(machineIndex),
        ];

        setSlots((prev) => {
          const copy = [...prev];
          copy[machineIndex] = finalSlots;
          return copy;
        });

        const [a, b, c] = finalSlots;
        let message = "";
        let payout = 0;

        if (a === b && b === c) {
          payout = 50;
          message = "🎉 JACKPOT! 3 in a row — you win 50 coins!";
        } else if (a === b || a === c || b === c) {
          payout = 20;
          message = "✨ Nice! You matched 2 — you win 20 coins.";
        } else {
          message = `No win on ${MACHINES[machineIndex].name}. You lost ${bet} coins.`;
        }

        if (payout > 0) {
          setCoins((c) => c + payout);
        }

        setResults((prev) => {
          const copy = [...prev];
          copy[machineIndex] = message;
          return copy;
        });

        setIsSpinning((prev) => {
          const copy = [...prev];
          copy[machineIndex] = false;
          return copy;
        });
      }
    }, 80);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        color: "#2E2E2E",
      }}
    >
      <Navbar />

      {/* Optional global wallet if you hook into context */}
      {/* <WalletComponent /> */}

      <Container className="text-center">
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
          ♣️ Slots
        </motion.h1>

        {/* Coin balance */}
        <p
          style={{
            fontWeight: "600",
            marginBottom: "5px",
          }}
        >
          Coins: {coins}
        </p>

        <p style={{ marginBottom: "25px", opacity: 0.7 }}>
          Try different machines with different bets and symbols!
        </p>

        {/* Machines */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {MACHINES.map((machine, idx) => (
            <Card
              key={machine.id}
              style={{
                width: "320px",
                borderRadius: "20px",
                border: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <Card.Body>
                <h1
                  style={{
                    fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  {machine.name}
                </h1>
                <p
                  style={{
                    marginTop: "-5px",
                    marginBottom: "15px",
                    opacity: 0.7,
                  }}
                >
                  Bet per spin: {machine.bet} coins
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                    marginBottom: "25px",
                  }}
                >
                  {slots[idx].map((symbol, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.1 }}
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "#FFFFFF",
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "40px",
                        border: "2px solid #DCEDE1",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      {symbol}
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={() => spin(idx)}
                  disabled={isSpinning[idx] || coins < machine.bet}
                  style={{
                    background: "#3C8269",
                    border: "none",
                    color: "white",
                    fontWeight: "700",
                    padding: "8px 24px",
                    boxShadow: "0 0 10px rgba(155, 220, 203, 0.6)",
                    opacity:
                      isSpinning[idx] || coins < machine.bet ? 0.7 : 1,
                    cursor:
                      isSpinning[idx] || coins < machine.bet
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {coins < machine.bet
                    ? "Not enough coins"
                    : isSpinning[idx]
                    ? "Spinning..."
                    : "Spin 🎲"}
                </Button>

                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    background:
                      "#3C8269",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    minHeight: "24px",
                  }}
                >
                  {results[idx]}
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
