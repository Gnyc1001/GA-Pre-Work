// Create an array
let cards = [
  {
    card: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    card: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    card: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    card: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];
// Match or not
let checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    timePrompt();
    //resetPage();
  } else {
    alert("Sorry, try again.");
    timePrompt();
    //resetPage();
  }
};
//Delayed prompt window to reset by 1 second
let timePrompt = function (){
  setTimeout(function(){ resetPage(); }, 1000);
}
//prompt to reset
let resetPage = function (){
  if(confirm("Do you want to reset the game?")){window.location.reload();}
};
//Function flipping a card
let flipCard = function () {
  cardId = this.getAttribute('data-id');
  console.log(cardId);
  cardsInPlay.push(cards[cardId].card);
  //Show card
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
};
let createBoard = function () {
  // Loop through your cards array
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
    }
  }
createBoard();
