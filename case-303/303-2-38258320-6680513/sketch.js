/*

Officer: 6680513
CaseNum: 303-2-38258320-6680513

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make SecureSafeCombination_a equal to the value of mouseX
	- Use the 'min' function to prevent SecureSafeCombination_a from going above 9

	Whilst the mouse is moving:
	- Decrement SecureSafeCombination_b by 1
	- Use the 'max' function to prevent SecureSafeCombination_b from falling below 4

	Whilst the mouse is moving:
	- Make SecureSafeCombination_c equal to the value of mouseY
	- Use the 'max' function to prevent SecureSafeCombination_c from falling below 5

	When the mouse button is released:
	- Increment SecureSafeCombination_d by 1
	- Use the 'min' function to prevent SecureSafeCombination_d from going above 19

	Whilst the mouse is being dragged:
	- Make SecureSafeCombination_e equal to the value of mouseY
	- Use the 'max' function to prevent SecureSafeCombination_e from falling below 9



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var SecureSafeCombination_a;
var SecureSafeCombination_b;
var SecureSafeCombination_c;
var SecureSafeCombination_d;
var SecureSafeCombination_e;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	SecureSafeCombination_a = 0;
	SecureSafeCombination_b = 0;
	SecureSafeCombination_c = 0;
	SecureSafeCombination_d = 0;
	SecureSafeCombination_e = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
// Whilst the mouse is being dragged:
// 	- Make SecureSafeCombination_a equal to the value of mouseX
// 	- Use the 'min' function to prevent SecureSafeCombination_a from going above 9
function mouseDragged(){
	SecureSafeCombination_a = mouseX;
	SecureSafeCombination_a = min(SecureSafeCombination_a, 9);

	SecureSafeCombination_e = mouseY;
	SecureSafeCombination_e = max(SecureSafeCombination_e, 9);
}

// Whilst the mouse is moving:
// 	- Decrement SecureSafeCombination_b by 1
// 	- Use the 'max' function to prevent SecureSafeCombination_b from falling below 4
function mouseMoved(){
	SecureSafeCombination_b -= 1;
	SecureSafeCombination_b = max(SecureSafeCombination_b, 4);

	SecureSafeCombination_c = mouseY;
	SecureSafeCombination_c = max(SecureSafeCombination_c, 5);
}

// Whilst the mouse is released:
// 	- Increment SecureSafeCombination_d by 1
// 	- Use the 'min' function to prevent SecureSafeCombination_d from going above 19
function mouseReleased(){
	SecureSafeCombination_d += 1;
	SecureSafeCombination_d = min(SecureSafeCombination_d, 19);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,SecureSafeCombination_a, 13);
	pop();

	push();
	translate(120,380);
	drawDial(140,SecureSafeCombination_b, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,SecureSafeCombination_c, 24);
	pop();

	push();
	translate(280,380);
	drawDial(140,SecureSafeCombination_d, 24);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(SecureSafeCombination_e);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
