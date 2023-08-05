/*

Officer: 6680513
CaseNum: 502-3-69936680-6680513

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var Excerpt_A = [
{
	Bit_0: {Token_0: "fence", Token_1: "fence", Token_2: "sneeze", Token_3: "meddle"}, 
	Bit_1: {Token_0: "consider", Token_1: "charge", Token_2: "stuff", Token_3: "consider"}, 
	Bit_2: {Token_0: "syndicate", Token_1: "bake", Token_2: "consider", Token_3: "Edsger"}
},
{
	Bit_0: {Token_0: "plug", Token_1: "tug", Token_2: "bake", Token_3: "meddle"}, 
	Bit_1: {Token_0: "COBOL", Token_1: "meddle", Token_2: "sneeze", Token_3: "radiate"}, 
	Bit_2: {Token_0: "rejoice", Token_1: "tug", Token_2: "stuff", Token_3: "start"}
},
{
	Bit_0: {Token_0: "radiate", Token_1: "charge", Token_2: "sneeze", Token_3: "play"}, 
	Bit_1: {Token_0: "sneeze", Token_1: "smile", Token_2: "mend", Token_3: "bake"}, 
	Bit_2: {Token_0: "rejoice", Token_1: "smile", Token_2: "radiate", Token_3: "stuff"}
},
{
	Bit_0: {Token_0: "succeed", Token_1: "rejoice", Token_2: "play", Token_3: "hurry"}, 
	Bit_1: {Token_0: "rejoice", Token_1: "mend", Token_2: "clip", Token_3: "start"}, 
	Bit_2: {Token_0: "clip", Token_1: "radiate", Token_2: "radiate", Token_3: "clip"}
},
{
	Bit_0: {Token_0: "tug", Token_1: "bake", Token_2: "bake", Token_3: "stuff"}, 
	Bit_1: {Token_0: "clip", Token_1: "sail", Token_2: "smile", Token_3: "sneeze"}, 
	Bit_2: {Token_0: "succeed", Token_1: "sneeze", Token_2: "smile", Token_3: "plug"}
}];

var Excerpt_B = [
{
	Bit_0: {Token_0: "clip", Token_1: "donation", Token_2: "tug", Token_3: "consider"}, 
	Bit_1: {Token_0: "radiate", Token_1: "fence", Token_2: "hurry", Token_3: "start"}, 
	Bit_2: {Token_0: "protect", Token_1: "succeed", Token_2: "sail", Token_3: "radiate"}
},
{
	Bit_0: {Token_0: "charge", Token_1: "consider", Token_2: "protect", Token_3: "play"}, 
	Bit_1: {Token_0: "clip", Token_1: "consider", Token_2: "plug", Token_3: "fence"}, 
	Bit_2: {Token_0: "tug", Token_1: "charge", Token_2: "plug", Token_3: "tug"}
},
{
	Bit_0: {Token_0: "mend", Token_1: "rejoice", Token_2: "rejoice", Token_3: "consider"}, 
	Bit_1: {Token_0: "consider", Token_1: "mend", Token_2: "start", Token_3: "sail"}, 
	Bit_2: {Token_0: "sail", Token_1: "sail", Token_2: "protect", Token_3: "rejoice"}
},
{
	Bit_0: {Token_0: "clip", Token_1: "meddle", Token_2: "Governor Zuckerberg", Token_3: "start"}, 
	Bit_1: {Token_0: "tug", Token_1: "you", Token_2: "plug", Token_3: "stuff"}, 
	Bit_2: {Token_0: "sail", Token_1: "ALGOL fish wholesalers", Token_2: "$200,000", Token_3: "start"}
},
{
	Bit_0: {Token_0: "rejoice", Token_1: "charge", Token_2: "smile", Token_3: "development"}, 
	Bit_1: {Token_0: "consider", Token_1: "start", Token_2: "radiate", Token_3: "play"}, 
	Bit_2: {Token_0: "bake", Token_1: "ALGOL", Token_2: "rejoice", Token_3: "succeed"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + Excerpt_A[0].Bit_2.Token_3 + ", I have just received your very generous " + Excerpt_B[0].Bit_0.Token_1 + " of " + Excerpt_B[3].Bit_2.Token_2 + ". Thank you. This will be invaluable to our campaign. " + Excerpt_B[4].Bit_2.Token_1 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + Excerpt_B[3].Bit_1.Token_1 + " or " + Excerpt_B[3].Bit_2.Token_1 + " to the " + Excerpt_A[0].Bit_2.Token_0 + ". Your new " + Excerpt_B[4].Bit_0.Token_3 + " at the " + Excerpt_A[1].Bit_1.Token_0 + " can now proceed without impediment. Yours sincerely, " + Excerpt_B[3].Bit_0.Token_2 + "";

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
