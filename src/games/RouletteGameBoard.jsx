// src/components/RouletteGameBoard.jsx
import { Row, Col, Card, Button } from "react-bootstrap";
import { RotateCcw } from "lucide-react";

export default function RouletteGameBoard({
  betOptions,
  selectedBet,
  onSelectBet,
  result,
  onSpin,
  onReset,
  isSpinning,
  coins,
  betAmount,
  lastNumber,
}) {
  return <Col xs={12} md={6}>
        {/* Bet Selection */}
        <Card
          style={{
            borderRadius: "16px",
            padding: "16px",
            background: "#FFFFFF",
            border: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            marginBottom: "12px",
          }}
        >
          <h5
            style={{
              fontWeight: "700",
              color: "#3C8269",
              marginBottom: 8,
            }}
          >
            Place Your Bet
          </h5>
          <Row className="g-2">
            {betOptions.map((bet) => (
              <Col xs={6} key={bet}>
                <Button
                  onClick={() => onSelectBet(bet)}
                  disabled={isSpinning}
                  style={{
                    width: "100%",
                    padding: "6px 0",
                    background:
                      selectedBet === bet
                        ? "white"
                        : "#3C8269",
                    border: "solid",
                    color:
                      selectedBet === bet
                        ? "black"
                        : "white",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    opacity: isSpinning ? 0.7 : 1,
                  }}
                >
                  {bet}
                </Button>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Result + Spin / Reset */}
        <Card
          style={{
            borderRadius: "16px",
            padding: "14px 16px",
            background: "#FFFFFF",
            border: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="mb-3" style={{ minHeight: 40 }}>
            {result === null ? (
              <p className="text-muted m-0">Result will appear here...</p>
            ) : (
              <p
                style={{
                  margin: 0,
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  background:
                    "#3C8269",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {result}
              </p>
            )}
          </div>

          <div className="d-flex gap-2">
            <Button
              size="sm"
              onClick={onSpin}
              disabled={isSpinning || coins < betAmount}
              style={{
                flex: 2,
                background: "#3C8269",
                border: "none",
                color: "#1B1B1B",
                fontWeight: "700",
                padding: "6px 10px",
                color: "white",
                opacity: isSpinning || coins < betAmount ? 0.7 : 1,
                cursor:
                  isSpinning || coins < betAmount
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              {coins < betAmount
                ? "Not enough coins"
                : isSpinning
                ? "Spinning..."
                : "Spin Wheel"}
            </Button>

            <Button
              size="sm"
              onClick={onReset}
              style={{
                flex: 1,
                background: "#3C8269",
                color: "white",
                border: "none",
                fontWeight: "700",
                padding: "6px 10px",
              }}
            >
              <RotateCcw className="me-1" size={16} />
              Reset
            </Button>
          </div>
        </Card>
      </Col>
}
