/*
Officer: 6680513
CaseNum: 601-3-74995004-6680513

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, OliveDrab stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Coral fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 81 pixels of any of the crimes within no more than 0 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var SuspectLogbook = [ 
  { pos_x : 518, pos_y : 471, date : 12},
  { pos_x : 486, pos_y : 508, date : 12},
  { pos_x : 475, pos_y : 566, date : 13},
  { pos_x : 376, pos_y : 554, date : 13},
  { pos_x : 316, pos_y : 559, date : 13},
  { pos_x : 265, pos_y : 614, date : 14},
  { pos_x : 253, pos_y : 609, date : 14},
  { pos_x : 240, pos_y : 604, date : 14},
  { pos_x : 220, pos_y : 597, date : 15},
  { pos_x : 178, pos_y : 600, date : 15},
  { pos_x : 199, pos_y : 604, date : 17},
  { pos_x : 146, pos_y : 582, date : 18},
  { pos_x : 115, pos_y : 551, date : 20},
  { pos_x : 67, pos_y : 495, date : 21},
  { pos_x : 39, pos_y : 493, date : 22},
  { pos_x : 68, pos_y : 461, date : 24} 
];


//Recent crime records.

var AttackLogbook = [ 
  { Loc_X : 438, Loc_Y : 420, recordDate : 11, Fatality_Name : 'JULIANA ADVERSANE'},
  { Loc_X : 408, Loc_Y : 451, recordDate : 11, Fatality_Name : 'LESLEY MONKSFORD'},
  { Loc_X : 408, Loc_Y : 377, recordDate : 13, Fatality_Name : 'LOUISE ZETLAND'},
  { Loc_X : 642, Loc_Y : 289, recordDate : 16, Fatality_Name : 'LARRAINE PEGORD'},
  { Loc_X : 623, Loc_Y : 279, recordDate : 16, Fatality_Name : 'ERMELINDA OORIN'},
  { Loc_X : 95, Loc_Y : 488, recordDate : 17, Fatality_Name : 'LINETTE MOHWAWK'},
  { Loc_X : 75, Loc_Y : 522, recordDate : 18, Fatality_Name : 'HANG NIEMELA'},
  { Loc_X : 269, Loc_Y : 597, recordDate : 26, Fatality_Name : 'JESUS FORSLIN'},
  { Loc_X : 389, Loc_Y : 554, recordDate : 28, Fatality_Name : 'JACQUELINE DURANTS'},
  { Loc_X : 484, Loc_Y : 549, recordDate : 2, Fatality_Name : 'JENIFFER DEAUVILLE'},
  { Loc_X : 496, Loc_Y : 484, recordDate : 9, Fatality_Name : 'KITTY THAXTER'},
  { Loc_X : 546, Loc_Y : 463, recordDate : 14, Fatality_Name : 'SUMMER CASIMERE'},
  { Loc_X : 538, Loc_Y : 359, recordDate : 12, Fatality_Name : 'NELSON TINTLE'},
  { Loc_X : 702, Loc_Y : 412, recordDate : 17, Fatality_Name : 'PIERRE DORCEY'},
  { Loc_X : 817, Loc_Y : 474, recordDate : 18, Fatality_Name : 'LAKESHA SYMMES'} 
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

  stroke(107,142,35);
	//add your code below here
  for (let index = 0; index < SuspectLogbook.length; index++) {
    rect(SuspectLogbook[index].pos_x-5, SuspectLogbook[index].pos_y-5, 7, 7);
  }
  noStroke();

  fill(255,127,80);
  for (let index = 0; index < AttackLogbook.length; index++) {
    triangle(AttackLogbook[index].Loc_X-5, AttackLogbook[index].Loc_Y-5, AttackLogbook[index].Loc_X+5, AttackLogbook[index].Loc_Y-5, AttackLogbook[index].Loc_X, AttackLogbook[index].Loc_Y+5);
  }
  noFill();

  for (let index = 0; index < SuspectLogbook.length; index++) {
    for (let index2 = 0; index2 < AttackLogbook.length; index2++) {
      if (dist(SuspectLogbook[index].pos_x, SuspectLogbook[index].pos_y, AttackLogbook[index2].Loc_X, AttackLogbook[index2].Loc_Y) < 81 && abs(SuspectLogbook[index].date - AttackLogbook[index2].recordDate) <= 0) {
        possibleMatches.push({crime:{x: AttackLogbook[index2].Loc_X, y: AttackLogbook[index2].Loc_Y, victimName: AttackLogbook[index2].Fatality_Name}, suspect:{x: SuspectLogbook[index].pos_x, y: SuspectLogbook[index].pos_y}});
      }
    }
  }

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
