import { Row, Col, Button} from "react-bootstrap";
import { RefreshCcw } from "lucide-react";

const BlackjackControls = ({ gameState, playerTotal, dealerTotal, hit, stand, double, bet, startGame, setCoins , coins, doubleBet}) => {
    const buttonStyle = {
            cursor: "pointer",
            padding: "8px 14px",
            borderRadius: "12px",
            fontWeight: "600",
            color: "#FFFFFF",
            background: "#3C8269",
            border: "none"
        };
    return (
        <Row className="text-center mb-5">
            <Col>
                <Button
                    size="lg"
                    disabled = {playerTotal > 21 || gameState}
                    style={{ ...buttonStyle, width: "8rem" }}
                    onClick={hit}
                >
                    Hit
                </Button>
            </Col>

            <Col >
                <Button
                    size="lg"
                    disabled = {playerTotal > 21 || gameState}
                    style={{ ...buttonStyle, width: "8rem" }}
                    onClick={stand}
                >
                    Stand
                </Button>
            </Col>

            <Col>
                <Button
                    size="lg"
                    disabled = {playerTotal > 21 || gameState}
                    style={{ ...buttonStyle, width: "8rem" }}
                    onClick={double}
                >
                    Double
                </Button>
            </Col>

            <Col>
                <Button
                    size="lg"
                    style={{ ...buttonStyle, width: "12rem" }}
                    disabled = {!gameState}
                    onClick={() => {
                        if(gameState)
                        {
                            startGame()

                            // Amount actually wagered this round:
                            const wager = doubleBet ? bet * 2 : bet;

                            if (playerTotal > 21) {
                                // Player busts → automatic loss
                                setCoins(coins - wager);
                            }
                            else if (dealerTotal > 21 && playerTotal <= 21) {
                                // Dealer busts → player wins
                                setCoins(coins + wager);
                            }
                            else if (playerTotal > dealerTotal && playerTotal <= 21) {
                                // Player wins by higher score
                                setCoins(coins + wager);
                            }
                            else if (dealerTotal > playerTotal && dealerTotal <= 21) {
                                // Dealer wins by higher score
                                setCoins(coins - wager);
                            }
                            else {
                                // Push (tie) → return the wager
                                // No change to coins
                                setCoins(coins);
                            }

                            
                            
                        }}}
                >
                    <RefreshCcw className="me-2" size={18} />
                    New Game
                </Button>
            </Col>
        </Row>
    );
};

export default BlackjackControls;
