/*
Officer: 6680513
CaseNum: 601-1-39679129-6680513

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkBlue stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Brown fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var fryLogbook_CoordinateX = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var fryLogbook_CoordinateY = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var theftLog = [ 
  { Location_X : 403, Location_Y : 401},
  { Location_X : 402, Location_Y : 360},
  { Location_X : 427, Location_Y : 403},
  { Location_X : 646, Location_Y : 284},
  { Location_X : 639, Location_Y : 264},
  { Location_X : 830, Location_Y : 434},
  { Location_X : 809, Location_Y : 443},
  { Location_X : 844, Location_Y : 496},
  { Location_X : 802, Location_Y : 350},
  { Location_X : 683, Location_Y : 413},
  { Location_X : 552, Location_Y : 464},
  { Location_X : 629, Location_Y : 498},
  { Location_X : 712, Location_Y : 562},
  { Location_X : 783, Location_Y : 603},
  { Location_X : 415, Location_Y : 225},
  { Location_X : 561, Location_Y : 282},
  { Location_X : 562, Location_Y : 392},
  { Location_X : 751, Location_Y : 283},
  { Location_X : 680, Location_Y : 359},
  { Location_X : 626, Location_Y : 436},
  { Location_X : 701, Location_Y : 455},
  { Location_X : 838, Location_Y : 565},
  { Location_X : 322, Location_Y : 508},
  { Location_X : 468, Location_Y : 556},
  { Location_X : 625, Location_Y : 737} 
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

  stroke(0, 0, 139);
	//add your code below here
  for (let index = 0; index < fryLogbook_CoordinateX.length; index++) {
    triangle(fryLogbook_CoordinateX[index] - 5, fryLogbook_CoordinateY[index] - 5, fryLogbook_CoordinateX[index] + 5, fryLogbook_CoordinateY[index] - 5, fryLogbook_CoordinateX[index], fryLogbook_CoordinateY[index] + 5);
  }

  noStroke();
  fill(165, 42, 42);
  for (let index = 0; index < theftLog.length; index++) {
    rect(theftLog[index].Location_X - 5, theftLog[index].Location_Y - 5, 10, 10);
  }

}

//We are not using the draw function this time
