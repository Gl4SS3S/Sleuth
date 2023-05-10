/*

Officer: 6680513
CaseNum: 202-3-21389811-6680513

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Salmon filled text with a Yellow Green outline in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(500,438);
	textSize(26);
}

function draw()
{
	background(255);

	fill(233,150,122);
	stroke(154,205,50);
	textFont(Ballpointprint);
	text("for", 422,133);
	fill(0,255,127);
	stroke(0,0,205);
	// text("silence.", 146,252);
	fill(0,139,139);
	stroke(0,100,0);
	textFont(RonsFont);
	// text("sometimes.", 296,194);
	fill(178,34,34);
	stroke(178,34,34);
	textFont(Diggity);
	// text("Daisy", 9,356);
	fill(100,149,237);
	stroke(0,191,255);
	// text("darling", 38,26);
	push();
	fill(135,206,250);
	stroke(199,21,133);
	// text("this", 175,163);
	pop();
	stroke(154,205,50);
	textFont(Melissa);
	// text("Forever", 14,304);
	fill(30,144,255);
	stroke(210,105,30);
	textFont(Ballpointprint);
	// text("?", 75,194);
	push();
	fill(220,20,60);
	stroke(0,255,255);
	// text("much", 147,225);
	pop();
	stroke(220,20,60);
	textFont(RonsFont);
	// text("sure", 38,225);
	fill(219,112,147);
	stroke(255,140,0);
	// text("away", 362,133);
	fill(176,224,230);
	stroke(165,42,42);
	textFont(Melissa);
	// text("so", 184,194);
	fill(0,250,154);
	stroke(75,0,130);
	textFont(Diggity);
	// text("should", 269,133);
	push();
	fill(255,165,0);
	stroke(0,250,154);
	// text("a", 464,133);
	pop();
	fill(176,224,230);
	textFont(Ballpointprint);
	// text("I'm", 418,194);
	fill(255,69,0);
	stroke(255,215,0);
	textFont(Diggity);
	// text("Is", 287,163);
	push();
	fill(138,43,226);
	stroke(160,82,45);
	textFont(RonsFont);
	// text("I", 6,78);
	pop();
	fill(240,128,128);
	textFont(RonsFont);
	// text("and", 80,163);
	fill(0,100,0);
	stroke(25,25,112);
	textFont(Melissa);
	// text("avoiding", 61,133);
	fill(240,128,128);
	textFont(Ballpointprint);
	// text("guarded", 207,194);
	fill(107,142,35);
	stroke(218,165,32);
	textFont(Diggity);
	// text("take", 300,225);
	fill(233,150,122);
	stroke(154,205,50);
	textFont(Melissa);
	// text("Bob,", 99,26);
	fill(238,232,170);
	stroke(0,0,205);
	// text("?", 197,104);
	fill(106,90,205);
	stroke(25,25,112);
	textFont(Diggity);
	// text("Perhaps", 160,133);
	fill(233,150,122);
	stroke(154,205,50);
	textFont(Ballpointprint);
	text("money", 129,104);
	text("safe", 18,194);
	text("ignore", 157,78);
	fill(0,128,128);
	stroke(32,178,170);
	textFont(RonsFont);
	// text("how", 100,225);
	fill(255,165,0);
	stroke(218,165,32);
	textFont(Melissa);
	// text("Are", 451,78);
	fill(178,34,34);
	stroke(148,0,211);
	textFont(RonsFont);
	// text("short", 37,104);
	fill(0,255,127);
	stroke(154,205,50);
	textFont(Melissa);
	// text("more", 201,225);
	fill(139,0,139);
	stroke(128,0,0);
	textFont(Diggity);
	// text("longer", 101,78);
	fill(160,82,45);
	stroke(210,105,30);
	textFont(RonsFont);
	// text("can", 256,225);
	fill(135,206,235);
	stroke(178,34,34);
	textFont(Melissa);
	// text("Are", 446,104);
	fill(30,144,255);
	textFont(RonsFont);
	// text("continual", 287,78);
	fill(0,128,0);
	stroke(255,140,0);
	// text("secrets,", 9,252);
	push();
	fill(218,165,32);
	stroke(128,0,128);
	textFont(Diggity);
	// text("are", 145,194);
	pop();
	fill(154,205,50);
	stroke(139,0,139);
	textFont(Melissa);
	// text("you", 9,104);
	fill(255,0,0);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("all", 215,163);
	fill(0,0,255);
	stroke(184,134,11);
	// text("x", 62,356);
	fill(255,165,0);
	stroke(0,255,127);
	textFont(Ballpointprint);
	// text("you", 20,133);
	fill(255,215,0);
	stroke(107,142,35);
	textFont(Diggity);
	// text("we", 233,133);
	fill(0,206,209);
	stroke(0,139,139);
	textFont(Melissa);
	// text("me", 120,133);
	push();
	fill(135,206,250);
	stroke(127,255,0);
	// text("The", 363,225);
	pop();
	fill(240,128,128);
	stroke(0,250,154);
	textFont(RonsFont);
	// text("can", 299,104);
	fill(144,238,144);
	stroke(199,21,133);
	textFont(Diggity);
	// text("of", 99,104);
	fill(219,112,147);
	stroke(184,134,11);
	textFont(Ballpointprint);
	// text("sort", 131,163);
	fill(0,139,139);
	stroke(220,20,60);
	// text("If", 211,104);
	fill(25,25,112);
	stroke(0,128,128);
	textFont(RonsFont);
	// text("break", 12,163);
	fill(218,112,214);
	stroke(139,0,0);
	textFont(Diggity);
	// text("send", 343,104);
	fill(178,34,34);
	stroke(255,255,0);
	textFont(Melissa);
	// text("?", 349,225);
	push();
	fill(0,255,127);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("our", 308,163);
	pop();
	fill(127,255,212);
	textFont(Diggity);
	// text("My", 6,26);
	fill(0,100,0);
	stroke(0,0,128);
	textFont(Melissa);
	// text("I", 242,225);
	fill(25,25,112);
	stroke(160,82,45);
	textFont(RonsFont);
	// text("the", 104,252);
	fill(139,69,19);
	stroke(0,255,255);
	// text("cash.", 389,104);
	fill(184,134,11);
	stroke(0,100,0);
	// text("these", 226,78);
	fill(128,0,128);
	stroke(128,0,0);
	// text("yours,", 74,304);
	push();
	fill(255,99,71);
	stroke(25,25,112);
	// text("can", 29,78);
	pop();
	fill(218,165,32);
	stroke(154,205,50);
	textFont(Melissa);
	// text("?", 146,133);
	fill(173,255,47);
	stroke(139,69,19);
	// text("not", 9,225);
	fill(233,150,122);
	stroke(148,0,211);
	textFont(Diggity);
	// text("I", 286,104);
	fill(123,104,238);
	stroke(210,105,30);
	// text("no", 73,78);
	fill(238,130,238);
	stroke(0,100,0);
	// text("You", 104,194);
	fill(165,42,42);
	stroke(220,20,60);
	// text("so,", 255,104);
	fill(107,142,35);
	stroke(255,165,0);
	// text("delays.", 389,78);
	push();
	fill(233,150,122);
	stroke(154,205,50);
	textFont(Ballpointprint);
	text("go", 328,133);
	pop();
	fill(238,130,238);
	stroke(0,128,128);
	textFont(Ballpointprint);
	// text("out.", 246,163);
	fill(240,230,140);
	stroke(165,42,42);
	textFont(RonsFont);
	// text("relationship", 345,163);



}
