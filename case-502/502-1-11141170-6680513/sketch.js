/*

Officer: 6680513
CaseNum: 502-1-11141170-6680513

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var censoredA = [
	{redacted0: "she has", redacted1: "radiate", redacted2: "clip"}, 
	{redacted0: "sneeze", redacted1: "rejoice", redacted2: "delicate"}, 
	{redacted0: "rejoice", redacted1: "meddle", redacted2: "sneeze"}, 
	{redacted0: "smile", redacted1: "meddle", redacted2: "Hopper’s"}, 
	{redacted0: "succeed", redacted1: "Edsger", redacted2: "stuff"}, 
	{redacted0: "clip", redacted1: "Governor Zuckerberg", redacted2: "plug"}, 
	{redacted0: "start", redacted1: "bake", redacted2: "play"}, 
	{redacted0: "plug", redacted1: "clip", redacted2: "play"}, 
	{redacted0: "bake", redacted1: "mend", redacted2: "meddle"}, 
	{redacted0: "meddle", redacted1: "smile", redacted2: "succeed"}
];

var censoredB = [
	{redacted0: "plug", redacted1: "sneeze", redacted2: "succeed"}, 
	{redacted0: "hurry", redacted1: "romantic", redacted2: "a donation"}, 
	{redacted0: "meddle", redacted1: "charge", redacted2: "stuff"}, 
	{redacted0: "protect", redacted1: "syndicate", redacted2: "sneeze"}, 
	{redacted0: "consider", redacted1: "plug", redacted2: "start"}, 
	{redacted0: "tug", redacted1: "radiate", redacted2: "capital"}, 
	{redacted0: "play", redacted1: "clip", redacted2: "COBOL"}, 
	{redacted0: "protect", redacted1: "smile", redacted2: "play"}, 
	{redacted0: "charge", redacted1: "plug", redacted2: "meddle"}, 
	{redacted0: "sail", redacted1: "play", redacted2: "clip"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + censoredA[4].redacted1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + censoredA[3].redacted2 + " intervention. I suspect that " + censoredA[0].redacted0 + " a " + censoredB[1].redacted1 + " interest at the " + censoredB[6].redacted2 + ". I and the " + censoredB[3].redacted1 + " appreciate your many contributions over the years. However, this is a most " + censoredA[1].redacted2 + " matter which would require significant " + censoredB[5].redacted2 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + censoredB[1].redacted2 + " to my forthcoming campaign would help. Yours sincerely, " + censoredA[5].redacted1 + "";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
