/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Selects the unordered list.
let ul = document.querySelector("ul");

// Selects the matching letters.
const matchedLetter = ul.children;

// Creates the Phrase class.
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  };

  /**
* Displays the phrase on the game board.
*/
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      const listItem = document.createElement("li");
      this.phrase[i] === " " ?
        listItem.className = "space" : listItem.className = `hide letter ${this.phrase[i]}`;
        listItem.textContent = this.phrase[i];
        ul.appendChild(listItem);
    }
  };

/**
* Checks if the passed letter is in the phrase
* @param (string) letter - Letter to check.
*/
  checkLetter(letter) {
    return this.phrase.includes(letter) ? true : false;
  };

  /**
* Displays the passed letter on screen after a match is found
* @param (string) letter - Letter to display.
*/
  showMatchedLetter(letter) {
    for (let i = 0; i < matchedLetter.length; i++) {
      if (letter === matchedLetter[i].textContent) {
        matchedLetter[i].className = `show letter ${matchedLetter[i].textContent}`;
      }
    }
  };
};

