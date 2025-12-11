import { Button, ButtonGroup } from 'react-bootstrap';

const BetButtons = (props) => {
    const betAmounts = [10, 25, 50, 100];

    return (
        <ButtonGroup className="gap-2">
            {betAmounts.map((amount, i) => (
                <Button
                    key={amount}
                    variant="primary"
                    onClick={() => props.setBet(amount)}
                    style = {{
                        cursor: "pointer",
                        padding: "8px 14px",
                        borderRadius: "12px",
                        fontWeight: "600",
                        color: amount == props.bet ? "black" : "#FFFFFF",
                        background: amount == props.bet ? "white" : "#3C8269",
                        border: "solid",
                    }}
                >
                    {amount} Coins
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default BetButtons;
