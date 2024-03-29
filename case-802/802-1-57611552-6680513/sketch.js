/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 6680513
CaseNum: 802-1-57611552-6680513

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called fill_shuffle_array.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 9 and 56.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call fill_shuffle_array in setup.
- Call Shuffle deck using the return value from fill_shuffle_array as the argument.

*/

var playingCards = [ { type: 'Spades', number: 'A'} , { type: 'Spades', number: '2'} , { type: 'Spades', number: '3'} , { type: 'Spades', number: '4'} , { type: 'Spades', number: '5'} , { type: 'Spades', number: '6'} , { type: 'Spades', number: '7'} , { type: 'Spades', number: '8'} , { type: 'Spades', number: '9'} , { type: 'Spades', number: '10'} , { type: 'Spades', number: 'J'} , { type: 'Spades', number: 'Q'} , { type: 'Spades', number: 'K'} , { type: 'Clubs', number: 'A'} , { type: 'Clubs', number: '2'} , { type: 'Clubs', number: '3'} , { type: 'Clubs', number: '4'} , { type: 'Clubs', number: '5'} , { type: 'Clubs', number: '6'} , { type: 'Clubs', number: '7'} , { type: 'Clubs', number: '8'} , { type: 'Clubs', number: '9'} , { type: 'Clubs', number: '10'} , { type: 'Clubs', number: 'J'} , { type: 'Clubs', number: 'Q'} , { type: 'Clubs', number: 'K'} , { type: 'Hearts', number: 'A'} , { type: 'Hearts', number: '2'} , { type: 'Hearts', number: '3'} , { type: 'Hearts', number: '4'} , { type: 'Hearts', number: '5'} , { type: 'Hearts', number: '6'} , { type: 'Hearts', number: '7'} , { type: 'Hearts', number: '8'} , { type: 'Hearts', number: '9'} , { type: 'Hearts', number: '10'} , { type: 'Hearts', number: 'J'} , { type: 'Hearts', number: 'Q'} , { type: 'Hearts', number: 'K'} , { type: 'Diamonds', number: 'A'} , { type: 'Diamonds', number: '2'} , { type: 'Diamonds', number: '3'} , { type: 'Diamonds', number: '4'} , { type: 'Diamonds', number: '5'} , { type: 'Diamonds', number: '6'} , { type: 'Diamonds', number: '7'} , { type: 'Diamonds', number: '8'} , { type: 'Diamonds', number: '9'} , { type: 'Diamonds', number: '10'} , { type: 'Diamonds', number: 'J'} , { type: 'Diamonds', number: 'Q'} , { type: 'Diamonds', number: 'K'}  ];
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


	//call your fill_shuffle_array function here. Followed by a call to shuffleDeck with the return value of fill_shuffle_array as an argument.
  shuffleDeck(fill_shuffle_array());
}

//write your fill_shuffle_array function here
function fill_shuffle_array() {
  let array = [];
  for (let index = 0; index < 52; index++) {
    array.push(round(random(9, 56)));
  }
  return array;
}


/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
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
		if (playingCards[i].marked)
		{
			drawCard(playingCards[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(playingCards[i], 400 + i * 18, 250);
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
