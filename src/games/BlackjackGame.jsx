import React, { useEffect, useState } from 'react';
import {Card} from "react-bootstrap";
import PlayingCards from "../components/PlayingCards";
import BlackjackControls from './BlackjackControls';
import WalletComponent from '../components/WalletComponent';
import BetButtons from './BetButtons';
import { Container, Row, Col, NavbarText } from "react-bootstrap";
import { useCoins } from "../context/CoinContext";

function getCardValue(rank) {
    if (rank == 'J'|| rank == 'Q'|| rank == 'K' || rank == '0') {
        return 10;   // "0" happens because 10 = "0" using card.code[0]
    }
    if (rank == 'A') {
        return 11;   // default as 11, adjust later
    }
    return parseInt(rank);
}


function getHandValue(cards) {
    let total = 0;
    let aceCount = 0;

    // Count everything; treat Aces as 11 initially
    for (let card of cards) {
        if (card.rank === "A") {
            total += 11;
            aceCount++;
        } else {
            total += getCardValue(card.rank);
        }
    }

    // If total > 21, reduce Aces from 11 → 1 one-by-one
    while (total > 21 && aceCount > 0) {
        total -= 10; // equivalent to turning 11 → 1
        aceCount--;
    }

    return total;
}


const BlackjackGame = () => {
    
    const { coins, setCoins } = useCoins();

    const cardStyle = {
        borderRadius: "20px",
        padding: "20px",
        background: "#FFFFFF",
    }
    const [deck, setDeck] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]); 
    const [gameState, setGameState] = useState(false);
    const [bet, setBet] = useState(10);
    const [doubleBet, setDoubleBet] = useState(false);
    let playerTotal = getHandValue(playerCards);
    let dealerTotal = getHandValue(dealerCards);
    let dealerInitial = dealerCards.length == 0 ? 0 : getCardValue(dealerCards[0].rank);

    const startGame = () => {
        let array = [];
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            for(let card of data.cards)
            {
                array.push({ rank: card.code[0], suit: card.suit })
            }
            let player = [];
            let dealer = [];
            player.push(array.pop());
            player.push(array.pop());
            dealer.push(array.pop()); 
            dealer.push(array.pop());
            setGameState(false)
            setPlayerCards(player)
            setDealerCards(dealer)
            setDeck(array)
            setDoubleBet(false)
        })
        .catch(error => console.error("Error fetching deck:", error));
    };

    const hit = () => {
        let newDeck = deck.slice();
        let card = newDeck.pop();
        if(getHandValue([...playerCards, card]) >= 21)
        {
            setGameState(true);
        }
        setPlayerCards([...playerCards, card]);
        setDeck(newDeck);
    };

    const stand = () => {
        let newDeck = deck.slice();
        let dealer = dealerCards.slice();
        while(dealerTotal < 17)
        {
            dealer.push(newDeck.pop())
            dealerTotal = getHandValue(dealer);
        }
        setDealerCards(dealer);
        setDeck(newDeck)
        setGameState(true);
        setDoubleBet(false);
    };



    const double = () => {
        hit();
        stand();
        setDoubleBet(true)
    };

    useEffect(() => {
        startGame();
    }, []);

    return (
        <div className="blackjack-game">
            
            <Row>
                <Col>
                    <BetButtons bet = {bet} setBet = {setBet}/>
                </Col>
                <Col>
                    <WalletComponent coins = {coins}/>
                </Col>
                <Col>
                    <h2 style={{ fontWeight: "700", color: "#3C8269" }}>
                        {
                        !gameState ? "What will you do?" :
                        playerTotal > 21 ? "Bust! You Lose" :
                        dealerTotal > 21 && playerTotal <= 21 ? "Dealer Busts! You Win!" :
                        playerTotal > dealerTotal ? "You Win!" :
                        dealerTotal > playerTotal ? "You Lose" :
                        "Push"
                        }
                        </h2>
                </Col>
            </Row>

            <Row>
                <p></p>
            </Row>

            

            {/* Dealer Section */}
            <Card
            className="mb-4"
            style={cardStyle}
            >
                <h2 style={{ fontSize: 25, fontWeight: "700", color: "#3C8269" }}>Dealer: {!gameState ? dealerInitial : dealerTotal}</h2>
                <div className="d-flex gap-3 mt-3 justify-content-center">
                    {dealerCards.length === 0 ? (
                    <p className="text-muted">Dealer cards will appear here...</p>
                    ) : (
                    dealerCards.map((card, i) => <PlayingCards hideAll = {i==1 && gameState == false} key = {i} cards = {[card]}/>)
                    )}
                </div>
            </Card>

            {/* Player Section */}
            <Card
                className="mb-4"
                style={cardStyle}
                >
                <h2 style={{ fontSize: 25, fontWeight: "700", color: "#3C8269" }}>Your Hand: {playerTotal}</h2>
                <div className="d-flex gap-3 mt-3 justify-content-center">
                    {playerCards.length === 0 ? (
                    <p className="text-muted">Your cards will appear here...</p>
                    ) : (
                    playerCards.map((card, i) => <PlayingCards key = {i} cards = {[card]}/>)
                    )}
                </div>
            </Card>
            
            <BlackjackControls gameState = {gameState} playerTotal = {playerTotal} hit = {hit} stand = {stand} double = {double} startGame = {startGame} setCoins = {setCoins} bet = {bet} coins = {coins} doubleBet = {doubleBet} dealerTotal = {dealerTotal}/>

        </div>
    );
};

export default BlackjackGame;