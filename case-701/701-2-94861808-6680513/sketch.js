/*

Officer: 6680513
CaseNum: 701-2-94861808-6680513

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from drusilla pegord. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. Their expression seemed empty. It was so scary! I'll never forget their pale eyes. They seemed to be between the age of 36 and 54 years old. They were fairly tall, I think between a height of 170 and 180 cm. They were carrying a black duffle bag. The person I saw was female. They were wearing a green jacket. They brobably weigh between 52 and 95 kg. It's so hard to remember right now. That's all I know officer. 

*/

var allSuspects = [
	{ 
		"name": "DEEDEE MONKSFORD",
		"gender": "male",
		"eyes": "black",
		"expression": "depressed",
		"accessory": "red backpack",
		"height": 173,
		"age": 39,
		"weight": 70
	},
	{ 
		"name": "TU THAXTER",
		"gender": "female",
		"eyes": "pale",
		"expression": "empty",
		"accessory": "black duffle bag",
		"height": 177,
		"age": 41,
		"weight": 59
	},
	{ 
		"name": "ERMELINDA ADVERSANE",
		"gender": "male",
		"eyes": "pale",
		"expression": "menacing",
		"accessory": "brown paper bag",
		"height": 175,
		"age": 45,
		"weight": 67
	},
	{ 
		"name": "LESLEY SYMMES",
		"gender": "female",
		"eyes": "blue",
		"expression": "blank",
		"accessory": "plastic box",
		"height": 156,
		"age": 39,
		"weight": 70
	},
	{ 
		"name": "KITTY SILVEIRA",
		"gender": "male",
		"eyes": "black",
		"expression": "nerveous",
		"accessory": "big black envelope",
		"height": 159,
		"age": 40,
		"weight": 72
	},
	{ 
		"name": "LAKESHA NIEMELA",
		"gender": "female",
		"eyes": "grey",
		"expression": "menacing",
		"accessory": "laptop bag",
		"height": 165,
		"age": 23,
		"weight": 66
	},
	{ 
		"name": "HANG JENI",
		"gender": "female",
		"eyes": "green",
		"expression": "nerveous",
		"accessory": "glass bottle",
		"height": 167,
		"age": 41,
		"weight": 76
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

// Declare your function here
function testSuspect(suspectObj){
  let matchingProperties = 0;

  if(suspectObj.expression == "empty"){
    matchingProperties++;
  }
  if(suspectObj.age >= 36 && suspectObj.age <= 54){
    matchingProperties++;
  }
  if(suspectObj.height >= 170 && suspectObj.height <= 180){
    matchingProperties++;
  }
  if(suspectObj.accessory == "black duffle bag"){
    matchingProperties++;
  }
  if(suspectObj.eyes == "pale"){
    matchingProperties++;
  }
  if (suspectObj.gender == "female") {
    matchingProperties++;
  }
  if(suspectObj.weight >= 52 && suspectObj.weight <= 95){
    matchingProperties++;
  }

  
  return matchingProperties;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    let matchingProperties = testSuspect(allSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + allSuspects[i].name, 60, 60 + i * 20);
  }
}
