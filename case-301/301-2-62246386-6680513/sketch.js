/*
The case of the Python Syndicate
Stage 3


Officer: 6680513
CaseNum: 301-2-62246386-6680513

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Robbie Kray has been declared and initialised
- Position each mugshot relative to Robbie Kray
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Robbie Kray object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Robbie Kray 
- Do not add any additional commands

*/

var photoBoard;
var pawel_karpinski_img;
var cecil_karpinski_img;
var robbie_kray_img;
var bones_karpinski_img;
var anna_karpinski_img;
var countess_hamilton_img;

var robbie_kray_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	countess_hamilton_img = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_object = {
		x: 701,
		y: 40,
		image: robbie_kray_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);

	image(pawel_karpinski_img, robbie_kray_object.x - 586, robbie_kray_object.y);
	image(cecil_karpinski_img, robbie_kray_object.x - 293, robbie_kray_object.y);
	image(bones_karpinski_img, robbie_kray_object.x - 586, robbie_kray_object.y + 269);
	image(anna_karpinski_img, robbie_kray_object.x - 293, robbie_kray_object.y + 269);
	image(countess_hamilton_img, robbie_kray_object.x, robbie_kray_object.y + 269);

}