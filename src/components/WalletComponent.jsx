
import { Wallet } from "lucide-react";
import {Card} from "react-bootstrap";

function WalletComponent(props) {
    return (
        <Card className="d-flex align-items-center gap-2"
                style={{
                    padding: "15px 25px",
                    borderRadius: "20px",
                    background: "#FFFFFF",
                    border: "none"
                }}
            >
                <div className="d-flex align-items-center gap-2">
                    <Wallet color="#3C8269" />
                    <h2 style={{ margin: 0, fontWeight: "700", color: "#3C8269" }}>{props.coins} Coins</h2>
                </div>
        </Card>
        
    );
}

export default WalletComponent;