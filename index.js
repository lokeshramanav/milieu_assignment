const GamePlay = require("./models/game")
const { generatePlayers, shuffleDeckOfCards } = require("./services/gameSetupService")
const cardRank = require('./utils/cardRankConstant')

const GameOfCards = ( noOfPlayers, noOfDecks  ) => {

    let players = generatePlayers(noOfPlayers)

    let shuffledDeck = shuffleDeckOfCards(noOfDecks)

    let NewGame = new GamePlay(players, shuffledDeck, cardRank)
    
    NewGame.startGame()
    NewGame.printGameResult()

    return
}

GameOfCards(5, 2)