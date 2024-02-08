const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  function startGame() {
    memoryGame.shuffleCards();
    let html = "";
    memoryGame.cards.forEach((pic) => {
      html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
    });

    // Add all the divs to the HTML
    document.querySelector("#memory-board").innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        // TODO: write some code here
        card.classList.add("turned");
        memoryGame.pickedCards.push(card);

        if (memoryGame.pickedCards.length >= 2) {
          let temp = memoryGame.checkIfPair(
            memoryGame.pickedCards[0].dataset.cardName,
            memoryGame.pickedCards[1].dataset.cardName
          );
          let clickedPairs = document.querySelector("#pairs-clicked");
          clickedPairs.textContent = memoryGame.pairsClicked;
          if (!temp) {
            setTimeout(() => {
              memoryGame.pickedCards.forEach((element) => {
                console.log(element);
                element.classList.remove("turned");
              });
              memoryGame.pickedCards.length = 0;
            }, 500);
          }
          if (temp) {
            let guessedPairs = document.querySelector("#pairs-guessed");
            guessedPairs.textContent = memoryGame.pairsGuessed;
            const gameOver = memoryGame.checkIfFinished();
            memoryGame.pickedCards.forEach((el) => {
              el.classList.add("blocked");
            });
            memoryGame.pickedCards.length = 0;
            console.log(gameOver);
            if (gameOver) {
              alert("You Win !!!");
              startGame();
            }
          }
        }
        console.log(`Card clicked: ${card}`);
      });
    });
  }
  startGame();
});
