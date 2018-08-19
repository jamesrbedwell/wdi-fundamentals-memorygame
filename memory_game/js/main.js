var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		//added class to allow reset
		cardElement.className = 'card';
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

// added win variable to show game wins.
var wins = 0;
document.getElementById('winNum').innerHTML = wins;
//added finished variable so player cannot flip more than two cards
var finished = false;

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	}, 
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}, 
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}, 
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}	
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			wins++;
			document.getElementById('winNum').innerHTML = wins;
			finished = true;
			} else {
			alert("Sorry, try again");
			finished = true;
			}
		};
	};

var flipCard = function() {
	if (finished === false) {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	} else {
		alert("You've already chosen two cards!");
	};
	
};

var flipBack = function(){
	for (var i = 0; i < cards.length; i++) {
		var allCards = document.querySelectorAll('.card');
			allCards[i].setAttribute('src', 'images/back.png');
			cardsInPlay = [];
			finished = false;
	};
}; 

var btnPressed = document.getElementById('resetButton').addEventListener('click', flipBack);

createBoard();
