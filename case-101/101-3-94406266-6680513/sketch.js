/*

Officer: 6680513
CaseNum: 101-3-94406266-6680513

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Navy filled rectangle with a Medium Turquoise outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Green Yellow filled
rectangle with a Royal Blue outline around him.

Identify the man reading the newspaper by drawing a Dark Red filled rectangle
with a Blue outline around him.

Identify the woman with the dog by drawing a Orchid filled rectangle with a
Dark Violet outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	stroke(72,209,204);
	fill(0,0,128,100);
	rect(15, 160, 490, 1001);

	stroke(65,105,225);
	fill(173,255,47,100);
	rect(1095, 430, 200, 260);

	stroke(0,0,255);
	fill(139,0,0,100);
	rect(1410, 330, 220, 412);

	stroke(148,0,211);
	fill(218,112,214,100);
	rect(1940, 250, 335,720);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
