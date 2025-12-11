import { Row, Col, Button} from "react-bootstrap";
import { RefreshCcw } from "lucide-react";

const BlackjackControls = ({ gameState, playerTotal, hit, stand, double, bet, startGame, setCoins , coins, doubleBet}) => {

    console.log(doubleBet)
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
                            if(doubleBet)
                            {
                                setCoins(coins - (bet * 2))
                            }
                            else
                            {
                                setCoins(coins - bet)
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
