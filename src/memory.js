class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    let currentIndex = this.cards.length;
    let temp = null;
    let randomIndex = null;
    while (currentIndex != 0) {
      currentIndex -= 1;
      randomIndex = Math.floor(Math.random() * currentIndex);
      temp = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    console.log(this.cards, this.pairsGuessed, 1);
    return this.cards.length / 2 === this.pairsGuessed;
  }
}
