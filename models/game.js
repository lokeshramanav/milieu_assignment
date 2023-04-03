class GamePlay {

    constructor (players, shuffledDeck, cardRank) {
        this.players = players
        this.shuffledDeck = shuffledDeck
        this.cardRank = cardRank
    }

    startGame () {
        let round = 1
        while (this.shuffledDeck.length > this.players.length) {
            this.dealEachPlayerACard()
            let whoWon = this.comparePlayers()
            this.addPointsToPlayer(whoWon)
            round += 1
        }
    }

    dealEachPlayerACard () {
        for (let player of this.players) {
            player.givePlayerACard( this.shuffledDeck.shift() )
        }
    }

    comparePlayers () {
        let whoWon = this.players.reduce( (winner, currentPlayer) => {
            if (currentPlayer.playerWishesToPlay()) {
                return this.compareCards(winner, currentPlayer)
            } else {
                return winner
            }
        }, this.players[0])
        return whoWon
    }

    compareCards (winner , currentPlayer) {
        if(currentPlayer.cardForTheRound.number !== winner.cardForTheRound.number) {
            if(this.cardRank[`${currentPlayer.cardForTheRound.number}`] > this.cardRank[`${winner.cardForTheRound.number}`]) {
                return currentPlayer
            } else {
                return winner
            }
        } else {
            if(this.cardRank[`${currentPlayer.cardForTheRound.suit}`] > this.cardRank[`${winner.cardForTheRound.suit}`]) {
                return currentPlayer
            } else {
                return winner
            }
        }
    }

    addPointsToPlayer (whoWon) {
        for (let player of this.players) { 
            if (player.playerName === whoWon.playerName) {
                player.givePlayerAPoint()
            }
        }
    }

    printGameResult () {
        this.players.sort((a , b) => {
            if (a.points > b.points) {
                return -1;
              } else if (a.points < b.points) {
                return 1;
              } else {
                return 0;
              }
        })

        for (let i = 0 ; i < this.players.length ; i++) {
            console.log(`Rank ${i} : ${this.players[i].playerName } Points : ${this.players[i].points }` )
        }
        return
    }
}

module.exports = GamePlay 