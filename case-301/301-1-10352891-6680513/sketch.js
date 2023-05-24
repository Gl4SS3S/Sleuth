/*
The case of the Python Syndicate
Stage 2


Officer: 6680513
CaseNum: 301-1-10352891-6680513

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky Kray

- The variables for Rocky Kray have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Rocky Kray
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Rocky Kray variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Rocky Kray 
- Do not add any additional commands

*/

var photoBoard;
var robbie_kray_image;
var rocky_kray_image;
var ada_lovelace_image;
var countess_hamilton_image;
var cecil_karpinski_image;
var anna_karpinski_image;


var rocky_kray_x_location = 408;
var rocky_kray_y_location = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	ada_lovelace_image = loadImage("ada.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rocky_kray_image, rocky_kray_x_location, rocky_kray_y_location);

	image(robbie_kray_image, rocky_kray_x_location - 293, rocky_kray_y_location);
	image(ada_lovelace_image, rocky_kray_x_location + 293, rocky_kray_y_location);
	image(countess_hamilton_image, rocky_kray_x_location - 293, rocky_kray_y_location + 269);
	image(cecil_karpinski_image, rocky_kray_x_location, rocky_kray_y_location + 269);
	image(anna_karpinski_image, rocky_kray_x_location + 293, rocky_kray_y_location + 269);

}