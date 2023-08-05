/*

Officer: 6680513
CaseNum: 701-1-86793187-6680513

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. I think they were more than 172 cm tall. It's so hard to remember right now. They were wearing a green army coat. Their expression seemed depressed. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. By the look of them they were younger than 42. It's hard to say. They were carrying a orange plastic bag. That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "ERMELINDA WILLMAR",
		"coat": "blue overcoat",
		"expression": "nerveous",
		"item": "purple hat",
		"height": 185,
		"age": 62
	},
	{ 
		"name": "LAVERNE SILVEIRA",
		"coat": "yellow poncho",
		"expression": "sad",
		"item": "pink scarf",
		"height": 171,
		"age": 45
	},
	{ 
		"name": "DEEDEE MAUBERT",
		"coat": "red parka",
		"expression": "confused",
		"item": "fur vest",
		"height": 205,
		"age": 58
	},
	{ 
		"name": "BRIDGET OORIN",
		"coat": "green army coat",
		"expression": "depressed",
		"item": "red necktie",
		"height": 175,
		"age": 38
	},
	{ 
		"name": "JAUNITA CROME",
		"coat": "white fur coat",
		"expression": "menacing",
		"item": "pair of leather trousers",
		"height": 150,
		"age": 42
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
  if(suspectObj.height > 172 && suspectObj.coat == "green army coat" && suspectObj.expression == "depressed" && suspectObj.item == "red necktie" && suspectObj.age < 42){
    return true;
  }

  return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(testSuspect(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
