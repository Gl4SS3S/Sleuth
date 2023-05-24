/*
The case of the Python Syndicate
Stage 4

Officer: 6680513
CaseNum: 301-3-60897501-6680513

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var pawelKarpinskiImg;
var rockyKrayImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var cecilKarpinskiImg;
var adaLovelaceImg;

var rockyKrayObj;
var pawelKarpinskiObj;
var annaKarpinskiObj;
var countessHamiltonObj;
var cecilKarpinskiObj;
var adaLovelaceObj;


//declare your new objects below

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	adaLovelaceImg = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObj = {
		x: 408,
		y: 40,
		image: rockyKrayImg
	};

	//define your new objects below
	pawelKarpinskiObj = {
		x: 115,
		y: 40,
		image: pawelKarpinskiImg
	};

	annaKarpinskiObj = {
		x: 701,
		y: 40,
		image: annaKarpinskiImg
	};

	countessHamiltonObj = {
		x: 115,
		y: 309,
		image: countessHamiltonImg
	};

	cecilKarpinskiObj = {
		x: 408,
		y: 309,
		image: cecilKarpinskiImg
	};

	adaLovelaceObj = {
		x: 701,
		y: 309,
		image: adaLovelaceImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(rockyKrayObj.image, rockyKrayObj.x, rockyKrayObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	image(adaLovelaceObj.image, adaLovelaceObj.x, adaLovelaceObj.y);


}