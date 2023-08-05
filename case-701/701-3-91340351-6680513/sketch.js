/*

Officer: 6680513
CaseNum: 701-3-91340351-6680513

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from darby courtwood.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. The person I saw was female. I'll never forget their pale eyes. They were wearing a black hoodie. They were fairly tall, I think between a height of 176 and 197 cm. It's so hard to remember right now. I remember they had a big arrow tattoo. They brobably weigh between 70 and 90 kg. They seemed to be between the age of 30 and 65 years old. They wore thin metallic glasses. It's hard to say. They were carrying a glass bottle. It's so hard to remember right now. I hope I never have to go through that again. 

*/

var allSuspects = [
	{ 
		"name": "SUMMER ASHELY",
		"coat": "yellow poncho",
		"tattoo": "chinese lettering",
		"glasses": "white",
		"eyes": "green",
		"height": 189,
		"weight": 66,
		"age": 43
	},
	{ 
		"name": "ERMELINDA MYRLE",
		"coat": "black overcoat",
		"tattoo": "dark black",
		"glasses": "light tan",
		"eyes": "pale",
		"height": 173,
		"weight": 78,
		"age": 42
	},
	{ 
		"name": "GAYLA PORTOS",
		"coat": "green jacket",
		"tattoo": "sword",
		"glasses": "dark brown",
		"eyes": "black",
		"height": 181,
		"weight": 82,
		"age": 39
	},
	{ 
		"name": "MALINDA MOHWAWK",
		"coat": "black hoodie",
		"tattoo": "big arrow",
		"glasses": "thin metallic",
		"eyes": "pale",
		"height": 177,
		"weight": 72,
		"age": 49
	},
	{ 
		"name": "LAVERNE CROME",
		"coat": "white fur coat",
		"tattoo": "dragon",
		"glasses": "red",
		"eyes": "green",
		"height": 179,
		"weight": 76,
		"age": 50
	},
	{ 
		"name": "LOUISE PEGORD",
		"coat": "red parka",
		"tattoo": "ox",
		"glasses": "very thick",
		"eyes": "blue",
		"height": 170,
		"weight": 81,
		"age": 45
	},
	{ 
		"name": "PIERRE DAVISWOOD",
		"coat": "green army coat",
		"tattoo": "jellyfish",
		"glasses": "black",
		"eyes": "brown",
		"height": 184,
		"weight": 69,
		"age": 34
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here
function matchProperties(suspectObj){
  let matchCount = 0;

  if(suspectObj.eyes == "pale"){
    matchCount++;
  }
  if(suspectObj.coat == "black hoodie"){
    matchCount++;
  }
  if(suspectObj.tattoo == "big arrow"){
    matchCount++;
  }
  if(suspectObj.glasses == "thin metallic"){
    matchCount++;
  }
  if(suspectObj.height >= 176 && suspectObj.height <= 197){
    matchCount++;
  }
  if(suspectObj.weight >= 70 && suspectObj.weight <= 90){
    matchCount++;
  }
  if(suspectObj.age >= 30 && suspectObj.age <= 65){
    matchCount++;
  }


  return matchCount;
}

function getSuspectMatch(){
  let matchCount = 0;
  let suspectMatch = {};

  for(let i = 0; i < allSuspects.length; i++){
    if(matchProperties(allSuspects[i]) > matchCount){
      matchCount = matchProperties(allSuspects[i]);
      suspectMatch = allSuspects[i];
    }  
  }
  return suspectMatch;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
