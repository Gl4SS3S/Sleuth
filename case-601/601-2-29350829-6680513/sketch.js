/*
Officer: 6680513
CaseNum: 601-2-29350829-6680513

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing BlueViolet stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkViolet fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 43 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Suspect_Sighted = {
	PosX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	PosY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var Murderscene_Data = [ 
  { LocX : 409, LocY : 446, KilledDetails : 'NELSON TINTLE'},
  { LocX : 443, LocY : 419, KilledDetails : 'DARBY MYRLE'},
  { LocX : 465, LocY : 548, KilledDetails : 'JENIFFER DEAUVILLE'},
  { LocX : 709, LocY : 552, KilledDetails : 'DEEDEE PHINNEY'},
  { LocX : 695, LocY : 421, KilledDetails : 'ERMELINDA OORIN'},
  { LocX : 652, LocY : 268, KilledDetails : 'DRUSILLA WARMAN'},
  { LocX : 641, LocY : 306, KilledDetails : 'BRAD SILVEIRA'},
  { LocX : 119, LocY : 344, KilledDetails : 'JESSIA PORTOS'},
  { LocX : 114, LocY : 359, KilledDetails : 'JULIANA ADVERSANE'},
  { LocX : 90, LocY : 490, KilledDetails : 'TU DAVISWOOD'},
  { LocX : 76, LocY : 516, KilledDetails : 'MALINDA GOODBURY'},
  { LocX : 615, LocY : 741, KilledDetails : 'JAUNITA JOYER'},
  { LocX : 349, LocY : 796, KilledDetails : 'BRIDGET BROADVIEW'},
  { LocX : 456, LocY : 770, KilledDetails : 'JESUS FORSLIN'} 
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

	stroke(138,43,226);
	beginShape();
	//add your code below here
	for (let index = 0; index < Suspect_Sighted.PosX.length; index++) {
		vertex(Suspect_Sighted.PosX[index], Suspect_Sighted.PosY[index]);
	}
	endShape();
	noStroke();

	fill(148,0,211);
	for (let index = 0; index < Murderscene_Data.length; index++) {
		rect(Murderscene_Data[index].LocX, Murderscene_Data[index].LocY, 7, 7);
	}
	noFill();

	for (let index = 0; index < Suspect_Sighted.PosX.length; index++) {
		for (let j = 0; j < Murderscene_Data.length; j++) {
			if (dist(Suspect_Sighted.PosX[index], Suspect_Sighted.PosY[index], Murderscene_Data[j].LocX, Murderscene_Data[j].LocY) < 43) {
				possibleMatches.push({
					suspect_x: Suspect_Sighted.PosX[index],
					suspect_y: Suspect_Sighted.PosY[index],
					crime_x: Murderscene_Data[j].LocX,
					crime_y: Murderscene_Data[j].LocY,
					victimName: Murderscene_Data[j].KilledDetails
				});
			}
		}
	}


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
