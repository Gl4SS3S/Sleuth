/*
Officer: 6680513
CaseNum: 601-0-17059602-6680513

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Teal stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var caseySighted = [ 
  { Point_X : 127, Point_Y : 175},
  { Point_X : 156, Point_Y : 158},
  { Point_X : 179, Point_Y : 192},
  { Point_X : 200, Point_Y : 154},
  { Point_X : 220, Point_Y : 133},
  { Point_X : 228, Point_Y : 168},
  { Point_X : 249, Point_Y : 149},
  { Point_X : 269, Point_Y : 139},
  { Point_X : 292, Point_Y : 168},
  { Point_X : 321, Point_Y : 133},
  { Point_X : 354, Point_Y : 159},
  { Point_X : 390, Point_Y : 144},
  { Point_X : 396, Point_Y : 225},
  { Point_X : 429, Point_Y : 228},
  { Point_X : 456, Point_Y : 230},
  { Point_X : 467, Point_Y : 277},
  { Point_X : 483, Point_Y : 267},
  { Point_X : 531, Point_Y : 291},
  { Point_X : 547, Point_Y : 278},
  { Point_X : 571, Point_Y : 274},
  { Point_X : 589, Point_Y : 318},
  { Point_X : 637, Point_Y : 280} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{

	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();

	image(countyMap, 0,0);

  stroke(0, 128, 128);
	//add your code below here
  for (let index = 0; index < caseySighted.length; index++) {
    rect(caseySighted[index].Point_X, caseySighted[index].Point_Y, 5, 5);
  }

  noFill();
	noStroke();
}

//We are not using the draw function this time
