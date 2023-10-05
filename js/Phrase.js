/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Selects unordered list.
let ul = document.querySelector("ul");

// Creates Phrase class.
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      const listItem = document.createElement("li");
      this.phrase[i] === " " ?
        listItem.className = "space" : listItem.className = `hide letter ${this.phrase[i]}`;
        listItem.textContent = this.phrase[i];
        ul.appendChild(listItem);
    }
  }
};

