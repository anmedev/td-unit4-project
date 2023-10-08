/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Selects screen overlay div.
const overlayDiv = document.querySelector("#overlay");

// Selects game over message heading.
const winOrLoseMsg = document.querySelector("#game-over-message");

// Selects all of the game lives.
let gameLives = document.querySelectorAll("img");

// Selects the unordered list.
const unorderedList = document.querySelector("ul");

// Selects all of the phrase letters.
const selectedLetters = unorderedList.children;

// Selects all of the keyboard buttons.
let keyBoardButtons = document.querySelectorAll(".key");

// Creates the Game class.
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
  };

/**
* Selects random phrase from phrases property.
* @return {Object} Phrase object chosen to be used.
*/
  getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
    };

/**
* Hides the start screen overlay, randomly selects a  Phrase object from the array of phrase, and adds the selected phrase to the gameboard.
* @return none.
*/
  startGame() {
      overlayDiv.style.display = "none";
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
  };

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    for (let i = 0; i < selectedLetters.length; i++) {
      if (selectedLetters[i].classList.contains("hide")) {
        return false;
      }
    }
    return true;
  };

  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon) {
    this.resetGame();
    overlayDiv.style.display = "block";
    if (gameWon) {
      winOrLoseMsg.textContent = "YAY! YOU WON!";
      overlayDiv.classList.remove("lose");
      overlayDiv.classList.add("win");
    } else {
      winOrLoseMsg.textContent = "Sorry, better luck next time!";
      overlayDiv.classList.remove("win");
      overlayDiv.classList.add("lose");
    }
  };

  /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
  removeLife() {
    gameLives[this.missed].setAttribute("src", "images/lostHeart.png");
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
      }
    };

    handleInteraction(button) {
      button.disabled = true;
      let letter = button.textContent;
      if (this.activePhrase.checkLetter(letter)) {
        button.classList.add("chosen");
        this.activePhrase.showMatchedLetter(letter);
      } else {
        button.classList.add("wrong");
        this.removeLife();
      }

      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }

/**
* Resets the game.
* @return none.
*/
    resetGame() {
      unorderedList.innerHTML = "";
      for (let i = 0; i < keyBoardButtons.length; i++) {
        keyBoardButtons[i].disabled = false;
        keyBoardButtons[i].classList.add("key");
        keyBoardButtons[i].classList.remove("wrong");
        keyBoardButtons[i].classList.remove("chosen");
      }

      for (let i = 0; i < gameLives.length; i++) {
        gameLives[i].setAttribute("src", "images/liveHeart.png");
      }
      this.missed = 0;
      }
    };


    
  

    

