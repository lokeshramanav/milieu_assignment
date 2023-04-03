const Player = require("../models/player")
const Card = require("../models/card")

const generatePlayers = (noOfPlayers) => {
    let totatPlayers = []
    for(let i = 1 ; i <= noOfPlayers ; i++) {
        totatPlayers.push(new Player(`Player ${i}`))
    }
    return totatPlayers
}

const shuffleDeckOfCards = (noOfDecks) => {
    let orderedDeck = {}
    let shuffledDeck = []

    for(let i = 1 ; i <= noOfDecks ; i++) { 
        let heartDeck = new Card('heart')
        let spadeDeck = new Card('spade')
        let clubDeck = new Card('club')
        let diamondDeck = new Card('diamond')

        orderedDeck[`${(i * 4) - 4}`] = heartDeck
        orderedDeck[`${(i * 4) - 3}`] = spadeDeck
        orderedDeck[`${(i * 4) - 2}`] = clubDeck
        orderedDeck[`${(i * 4) - 1}`] = diamondDeck

    }

    while (shuffledDeck.length < (noOfDecks * 52) ) { 

        let cardDeck = Math.floor(Math.random() *  (noOfDecks * 4))
        let selectedCardDeck = orderedDeck[`${cardDeck}`]
        let cardDetails = {
            suit : "" ,
            number : ""
        }
        let card = selectedCardDeck.takeCard() 

        if (card !== "Select Other Deck") {
            cardDetails.suit = selectedCardDeck.cardType
            cardDetails.number = card
            shuffledDeck.push(cardDetails)
            continue
        } else {
            continue
        }

    }

    return shuffledDeck
}

module.exports = {
    generatePlayers,
    shuffleDeckOfCards
}