class Player { 

    constructor (playerName) {
        this.playerName = playerName
        this.points = 0
        this.cardForTheRound = {}
    } 

    givePlayerACard (cardDetails) {
        this.cardForTheRound = cardDetails
    }

    givePlayerAPoint () { 
        this.points += 1
    }

    playerWishesToPlay () {
        return Math.random() > 0.5
    }
}

module.exports = Player 