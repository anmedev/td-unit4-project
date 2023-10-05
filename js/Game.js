/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Selects screen overlay div.
const overlayDiv = document.querySelector("#overlay");

// Game class.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Break the ice"),
      new Phrase("Cool as a cucumber"),
      new Phrase("On cloud nine"),
      new Phrase("Up in the air"),
      new Phrase("Practice makes perfect")
    ];
    this.activePhrase = null;
  }

/**
* Selects random phrase from phrases property.
* @return {Object} Phrase object chosen to be used.
*/
  getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
    }

/**
* Hides the start screen overlay, randomly selects a  Phrase object from the array of phrase, and adds the selected phrase to the gameboard.
* @return none.
*/
  startGame() {
      overlayDiv.style.display = "none";
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
  }
};