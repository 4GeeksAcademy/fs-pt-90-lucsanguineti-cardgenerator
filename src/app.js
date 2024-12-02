import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuits = ["♦", "♥", "♠", "♣"];
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

function getRandomSuit() {
  return cardSuits[Math.floor(Math.random() * cardSuits.length)];
}

function getRandomNumber() {
  return cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
}

window.onload = function() {
  let suitDiv = document.getElementById("top-card");
  let numberDiv = document.getElementById("center-card");
  let bottomSuitDiv = document.getElementById("bottom-card");

  let suit = getRandomSuit();
  suitDiv.innerHTML = suit;
  suitDiv.classList.add(suit);
  bottomSuitDiv.innerHTML = suit;
  bottomSuitDiv.classList.add(suit);

  let number = getRandomNumber();
  numberDiv.innerHTML = number;
  numberDiv.classList.add(number);
};
