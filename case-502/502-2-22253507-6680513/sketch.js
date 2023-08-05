/*

Officer: 6680513
CaseNum: 502-2-22253507-6680513

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var AEvidence = {
	bit0: [ "fence", "charge", "hit"], 
	bit1: [ "stuff", "clip", "tug"], 
	bit2: [ "consider", "protect", "stuff"], 
	bit3: [ "Edsger", "clip", "sail"], 
	bit4: [ "tug", "sneeze", "play"], 
	bit5: [ "tug", "rejoice", "stuff"], 
	bit6: [ "Hopper", "charge", "meddle"], 
	bit7: [ "clip", "sneeze", "charge"], 
	bit8: [ "ALGOL", "sneeze", "sneeze"], 
	bit9: [ "a donation", "bake", "bake"]
};

var BEvidence = {
	bit0: [ "play", "clip", "syndicate"], 
	bit1: [ "fence", "tug", "protect"], 
	bit2: [ "bake", "plug", "clip"], 
	bit3: [ "protect", "play", "Governor Zuckerberg"], 
	bit4: [ "protect", "succeed", "sail"], 
	bit5: [ "tug", "campaign", "start"], 
	bit6: [ "fence", "play", "smile"], 
	bit7: [ "sneeze", "plug", "$200,000"], 
	bit8: [ "tug", "start", "tug"], 
	bit9: [ "smile", "meddle", "sneeze"]
};

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
  redactedText = "Dear " + BEvidence.bit3[2] + ", I am sure that something could be worked out in terms of " + AEvidence.bit9[0] + " for your " + BEvidence.bit5[1] + ". How does " + BEvidence.bit7[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + AEvidence.bit6[0] + " needs to be out of the picture. She’s caused enough trouble. Get the " + BEvidence.bit0[2] + " to organise the " + AEvidence.bit0[2] + " but I’d prefer it you don’t mention me or " + AEvidence.bit8[0] + ". I owe them enough favours already. Your old friend, " + AEvidence.bit3[0] + "";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
