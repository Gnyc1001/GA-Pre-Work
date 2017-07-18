
var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
} else {
    console.log("Sorry, try again.");
}
}
var flipCard = function () {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(2);

console.log("User flipped queen "+ cards[cardId]);
console.log("User flipped king "+ cards[cardId]);
