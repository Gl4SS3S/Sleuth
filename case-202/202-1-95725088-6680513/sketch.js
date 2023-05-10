/*

Officer: 6680513
CaseNum: 202-1-95725088-6680513

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Cornflower Blue filled text with a Purple outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(685,577);
	textFont(letterFont);
	textSize(37);
}

function draw()
{
	background(255);

	fill(139,0,0);
	stroke(255,255,0);
	// text("longing", 126,323);
	fill(238,130,238);
	// text("town", 116,276);
	fill(255,69,0);
	stroke(218,165,32);
	// text("Forever", 9,397);
	fill(127,255,0);
	stroke(139,69,19);
	// text("the", 75,196);
	fill(233,150,122);
	stroke(0,0,128);
	// text("in", 447,150);
	fill(30,144,255);
	stroke(0,250,154);
	// text("is", 624,111);
	fill(0,128,128);
	stroke(0,206,209);
	// text("do", 510,276);
	fill(32,178,170);
	stroke(128,128,0);
	// text("can", 292,196);
	fill(255,165,0);
	stroke(0,139,139);
	// text("darling", 50,37);
	fill(34,139,34);
	stroke(139,0,139);
	// text("and", 228,196);
	fill(135,206,250);
	stroke(153,50,204);
	// text("you", 205,111);
	fill(173,255,47);
	stroke(255,0,0);
	// text("having", 135,111);
	fill(153,50,204);
	stroke(199,21,133);
	// text("x", 73,471);
	fill(0,255,127);
	stroke(128,128,0);
	// text("arms.", 509,150);
	fill(135,206,250);
	stroke(0,0,139);
	// text("this", 9,276);
	fill(0,128,128);
	stroke(0,128,128);
	// text("return.", 131,239);
	fill(75,0,130);
	stroke(165,42,42);
	// text("your", 11,239);
	fill(210,105,30);
	stroke(0,100,0);
	// text("think", 336,196);
	fill(0,100,0);
	stroke(178,34,34);
	// text("to", 325,150);
	fill(75,0,130);
	stroke(255,0,0);
	// text("?", 201,323);
	fill(255,127,80);
	stroke(0,255,127);
	// text("longer", 441,276);
	fill(0,255,127);
	stroke(107,142,35);
	// text("small", 57,276);
	fill(123,104,238);
	stroke(139,0,139);
	// text("st", 594,150);
	fill(0,0,128);
	stroke(218,165,32);
	// text("many", 479,111);
	fill(25,25,112);
	stroke(128,128,0);
	// text("Bob,", 124,37);
	fill(153,50,204);
	stroke(139,69,19);
	// text("yo", 95,397);
	fill(255,140,0);
	stroke(32,178,170);
	// text("my", 568,239);
	fill(124,252,0);
	stroke(0,0,205);
	// text("How", 9,111);
	fill(127,255,0);
	stroke(0,206,209);
	// text("united", 398,323);
	fill(255,0,0);
	stroke(0,250,154);
	// text("you", 405,150);
	fill(0,255,255);
	stroke(178,34,34);
	// text("to", 617,276);
	fill(173,216,230);
	stroke(0,0,255);
	// text("spring,", 328,239);
	fill(128,0,0);
	stroke(184,134,11);
	// text("How", 333,276);
	fill(128,0,128);
	stroke(0,0,255);
	// text("the", 286,239);
	fill(123,104,238);
	stroke(107,142,35);
	// text("miss", 79,111);
	fill(0,100,0);
	stroke(160,82,45);
	// text("my", 471,150);
	fill(199,21,133);
	stroke(148,0,211);
	// text("will", 286,323);
	fill(124,252,0);
	stroke(0,128,128);
	// text("around", 247,111);
	fill(176,224,230);
	stroke(255,140,0);
	// text("the", 322,111);
	fill(0,128,128);
	stroke(0,250,154);
	// text("sky,", 175,196);
	fill(34,139,34);
	stroke(34,139,34);
	// text("When", 222,323);
	fill(218,165,32);
	stroke(255,255,0);
	// text("Even", 206,239);
	fill(218,112,214);
	stroke(178,34,34);
	// text("without", 407,239);
	fill(255,99,71);
	stroke(50,205,50);
	// text("have", 563,276);
	fill(106,90,205);
	stroke(75,0,130);
	// text("I", 543,276);
	fill(0,128,0);
	stroke(0,128,0);
	// text("desolate.", 234,276);
	fill(0,255,127);
	stroke(0,128,128);
	// text("I", 272,196);
	fill(255,140,0);
	stroke(127,255,0);
	// text("D", 9,471);
	fill(255,69,0);
	stroke(255,0,0);
	// text("aisy", 23,471);
	fill(255,140,0);
	stroke(0,0,139);
	// text("I", 574,150);
	fill(176,224,230);
	stroke(160,82,45);
	// text("night", 117,196);
	fill(128,0,0);
	stroke(0,206,209);
	// text("much", 383,276);
	fill(255,255,0);
	stroke(0,250,154);
	// text("ki", 162,150);
	fill(123,104,238);
	stroke(184,134,11);
	// text("feels", 175,276);
	fill(0,191,255);
	stroke(0,0,255);
	// text("on", 643,196);
	fill(255,105,180);
	stroke(128,128,0);
	// text("of", 442,196);
	fill(210,105,30);
	stroke(46,139,87);
	// text("we", 73,150);
	fill(65,105,225);
	stroke(0,139,139);
	// text("are", 618,150);
	fill(250,128,114);
	stroke(139,0,0);
	// text("urs,", 119,397);
	fill(128,0,128);
	stroke(160,82,45);
	// text("place.", 364,111);
	fill(0,0,139);
	stroke(50,205,50);
	// text("you.", 474,196);
	fill(238,130,238);
	stroke(34,139,34);
	// text("How", 429,111);
	fill(135,206,250);
	stroke(160,82,45);
	// text("I'm", 520,196);
	fill(255,105,180);
	stroke(0,128,0);
	// text("again", 465,323);
	fill(135,206,235);
	stroke(107,142,35);
	// text("last", 113,150);
	fill(139,0,0);
	stroke(210,105,30);
	// text("we", 327,323);
	fill(173,216,230);
	stroke(255,255,0);
	// text("you", 494,239);
	fill(148,0,211);
	stroke(184,134,11);
	// text("be", 367,323);
	fill(100,149,237);
	stroke(128,0,128);
	text("store", 12,323);
	text("up", 12,196);
	text("side", 606,239);
	fill(135,206,250);
	stroke(139,0,139);
	// text("long", 277,150);
	fill(173,216,230);
	stroke(0,139,139);
	// text("My", 9,37);
	fill(220,20,60);
	stroke(165,42,42);
	// text("it", 650,111);
	fill(100,149,237);
	stroke(128,0,128);
	text("hold", 357,150);
	fill(173,255,47);
	stroke(255,215,0);
	// text("I", 59,111);
	fill(100,149,237);
	stroke(128,0,128);
	text("swift", 63,239);
	text("at", 43,196);
	fill(0,0,139);
	stroke(128,128,0);
	// text("months", 540,111);
	fill(139,69,19);
	stroke(128,0,0);
	// text("since", 13,150);
	fill(0,100,0);
	stroke(154,205,50);
	// text("ssed", 178,150);
	fill(100,149,237);
	stroke(0,128,128);
	// text("this", 78,323);
	fill(255,0,255);
	stroke(139,0,139);
	// text("only", 394,196);
	fill(128,0,128);
	stroke(184,134,11);
	// text("banking", 561,196);
	fill(50,205,50);
	stroke(0,206,209);
	// text("at", 536,239);
	fill(244,164,96);
	stroke(154,205,50);
	// text("in", 262,239);
	fill(165,42,42);
	stroke(0,191,255);
	// text("I", 257,150);
	fill(148,0,211);
	stroke(139,0,139);
	// text("?", 525,323);
	stroke(127,255,0);
	// text("?", 236,150);



}
