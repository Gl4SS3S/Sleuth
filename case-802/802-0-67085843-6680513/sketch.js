/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 6680513
CaseNum: 802-0-67085843-6680513

Don your best threads we're off to the Monte Carlo Casino ! We're tailing a gang of high rolling statisticians who run Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are.

They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

- Write a function called  select_cards.
- Inside the function, use a for loop to set the marked property of the deck array elements to true when the suit is Spades or the value is 9
- Call the function from within setup

*/

var deck = [ { marked: false, type: 'Spades', number: 'A'} , { marked: false, type: 'Spades', number: '2'} , { marked: false, type: 'Spades', number: '3'} , { marked: false, type: 'Spades', number: '4'} , { marked: false, type: 'Spades', number: '5'} , { marked: false, type: 'Spades', number: '6'} , { marked: false, type: 'Spades', number: '7'} , { marked: false, type: 'Spades', number: '8'} , { marked: false, type: 'Spades', number: '9'} , { marked: false, type: 'Spades', number: '10'} , { marked: false, type: 'Spades', number: 'J'} , { marked: false, type: 'Spades', number: 'Q'} , { marked: false, type: 'Spades', number: 'K'} , { marked: false, type: 'Clubs', number: 'A'} , { marked: false, type: 'Clubs', number: '2'} , { marked: false, type: 'Clubs', number: '3'} , { marked: false, type: 'Clubs', number: '4'} , { marked: false, type: 'Clubs', number: '5'} , { marked: false, type: 'Clubs', number: '6'} , { marked: false, type: 'Clubs', number: '7'} , { marked: false, type: 'Clubs', number: '8'} , { marked: false, type: 'Clubs', number: '9'} , { marked: false, type: 'Clubs', number: '10'} , { marked: false, type: 'Clubs', number: 'J'} , { marked: false, type: 'Clubs', number: 'Q'} , { marked: false, type: 'Clubs', number: 'K'} , { marked: false, type: 'Hearts', number: 'A'} , { marked: false, type: 'Hearts', number: '2'} , { marked: false, type: 'Hearts', number: '3'} , { marked: false, type: 'Hearts', number: '4'} , { marked: false, type: 'Hearts', number: '5'} , { marked: false, type: 'Hearts', number: '6'} , { marked: false, type: 'Hearts', number: '7'} , { marked: false, type: 'Hearts', number: '8'} , { marked: false, type: 'Hearts', number: '9'} , { marked: false, type: 'Hearts', number: '10'} , { marked: false, type: 'Hearts', number: 'J'} , { marked: false, type: 'Hearts', number: 'Q'} , { marked: false, type: 'Hearts', number: 'K'} , { marked: false, type: 'Diamonds', number: 'A'} , { marked: false, type: 'Diamonds', number: '2'} , { marked: false, type: 'Diamonds', number: '3'} , { marked: false, type: 'Diamonds', number: '4'} , { marked: false, type: 'Diamonds', number: '5'} , { marked: false, type: 'Diamonds', number: '6'} , { marked: false, type: 'Diamonds', number: '7'} , { marked: false, type: 'Diamonds', number: '8'} , { marked: false, type: 'Diamonds', number: '9'} , { marked: false, type: 'Diamonds', number: '10'} , { marked: false, type: 'Diamonds', number: 'J'} , { marked: false, type: 'Diamonds', number: 'Q'} , { marked: false, type: 'Diamonds', number: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your select_cards function here

}

//write your select_cards function here
function select_cards() {
  for (let index = 0; index < deck.length; index++) {
    if (deck[index].type == "Spades" || deck[index].number == "9") {
      deck[index].marked = true;
    }
  }
}


function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (deck[i].marked)
		{
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.number == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
