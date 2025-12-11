import React from 'react';

const PlayingCards = ({ cards, hideAll = false }) => {
    const getSuitSymbol = (suit) => {
        const symbols = {
            HEARTS: '♥',
            DIAMONDS: '♦',
            CLUBS: '♣',
            SPADES: '♠',
        };
        return symbols[suit] || suit;
    };

    const getCardColor = (suit) => {
        return suit === 'HEARTS' || suit === 'DIAMONDS' ? 'red' : 'black';
    };

    // ---------- Styles ----------
    const styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
        },
        card: {
            width: "90px",
            height: "130px",
            borderRadius: "8px",
            border: "2px solid #222",
            background: "white",
            padding: "6px",
            position: "relative",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.15)",
        },
        hiddenCard: {
            background: "repeating-linear-gradient(45deg, #004, #004 10px, #226 10px, #226 20px)",
            color: "transparent",
            border: "2px solid #000",
        },
        cardCorner: {
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "16px",
        },
        topLeft: {
            top: "6px",
            left: "6px",
        },
        bottomRight: {
            bottom: "6px",
            right: "6px",
            transform: "rotate(180deg)",
        },
        center: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        },
        large: {
            fontSize: "42px",
        },
    };

    return (
        <div style={styles.container}>
            {cards.map((card, index) => {
                if(card.rank == 0)
                {
                    card.rank = 10;
                }
                const isHidden = hideAll || card.hidden;
                const color = getCardColor(card.suit);

                return (
                    <div
                        key={index}
                        style={{
                            ...styles.card,
                            ...(isHidden ? styles.hiddenCard : { color })
                        }}
                    >
                        {!isHidden && (
                            <>
                                {/* Top-left corner */}
                                <div style={{ ...styles.cardCorner, ...styles.topLeft }}>
                                    <div>{card.rank}</div>
                                    <div>{getSuitSymbol(card.suit)}</div>
                                </div>

                                {/* Center suit */}
                                <div style={styles.center}>
                                    <div style={styles.large}>
                                        {getSuitSymbol(card.suit)}
                                    </div>
                                </div>

                                {/* Bottom-right corner */}
                                <div style={{ ...styles.cardCorner, ...styles.bottomRight }}>
                                    <div>{card.rank}</div>
                                    <div>{getSuitSymbol(card.suit)}</div>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default PlayingCards;
