// setting IDs in HTML to JS Variables
var valW = document.getElementById('valW');
var valA = document.getElementById('valA');
var valS = document.getElementById('valS');
var valD = document.getElementById('valD');
var cardCost = document.getElementById('cardCost');
var cardName = document.getElementById('cardName');
var rulesText = document.getElementById('rulesText');
var cardNo = document.getElementById('botLeftText');

// Card is a constructor 
const card = new Object();
card.name = 'Spellbook';
card.cardNo = 1;
card.cost = 1;
card.type = 'A'
card.valW = 2;
card.valA = 0;
card.valS = 1;
card.valD = 3;
card.text = '';
console.log(card);

const spellbook = ['Spellbook', 1, 1, 'A', 2, 0, 1, 3, '']
const runepages = ['Rune Pages', 2, 1, 'N', 2, 2, 0, 0, '']

// Left side is JS variables that reference the elements in the SVG
// Right side is the value of the current card that's loaded
valW.textContent = card.valW;
valA.textContent = card.valA;
valS.textContent = card.valS;
valD.textContent = card.valD;
cardCost.textContent = card.cost;
cardName.textContent = card.name;
rulesText.textContent = card.text;
cardNo.textContent = card.cardNo;