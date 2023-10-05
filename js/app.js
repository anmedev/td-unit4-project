/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Selects reset button.
const startGameBtn = document.querySelector("#btn__reset");

/* Starts the game when the "Start Game" button is clicked. */
startGameBtn.addEventListener("click", () => {
  let game;
  game = new Game();
  game.startGame();
});