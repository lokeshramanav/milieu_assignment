class Card {

    constructor(suit) {
        this.cardType = suit
        this.standardCards = ["A", "2", "3", "4","5", "6","7", "8","9", "10","J", "Q", "K" ]
    }   

    takeCard () {
        if (this.standardCards.length !== 0) {
            const randomCard = this.standardCards[Math.floor(Math.random() * this.standardCards.length)]
            this.standardCards = [...this.standardCards.filter((i) => {
                return i !== randomCard 
            })]
            return randomCard
        } else {
            return "Select Other Deck"
        }
        
    }

}

module.exports = Card 