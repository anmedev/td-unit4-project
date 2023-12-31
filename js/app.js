/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Selects the "Start Game" button.
const startGameBtn = document.querySelector("#btn__reset");

// Starts the game when the "Start Game" button is clicked.
startGameBtn.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

/* Selects keyboard buttons and adds an event listener to the keyboard button that is clicked.*/
const keyBoardBtns = document.querySelectorAll(".key");
for (let i = 0; i < keyBoardBtns.length; i++) {
  keyBoardBtns[i].addEventListener("click", (e) => {
    let selectedBtn = e.target;
    game.handleInteraction(selectedBtn);
  });
};