/*

Officer: 6680513
CaseNum: 702-0-30137393-6680513

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of InvestigatorVehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car()
{
	/*
	This function should do the following: 
	 - increment InvestigatorVehicleObject's DistTravelled property by its GasAmount property 
	 - add a random amount between -0.05 and 0.05 to InvestigatorVehicleObject's ShudderVal property
	 - use the constrain function to constrain InvestigatorVehicleObject's ShudderVal property to values between 0.02 and 0.77
	 - call the Turn_CarEngine function passing InvestigatorVehicleObject as an argument
	*/
  
    InvestigatorVehicleObject.DistTravelled += InvestigatorVehicleObject.GasAmount;
    InvestigatorVehicleObject.ShudderVal += random(-0.05, 0.05);
    InvestigatorVehicleObject.ShudderVal = constrain(InvestigatorVehicleObject.ShudderVal, 0.02, 0.77);
    Turn_CarEngine(InvestigatorVehicleObject);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var InvestigatorVehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	InvestigatorVehicleObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 300,
		DistTravelled: 0,
		GasAmount: 3,
		ShudderVal: 0,
		VehicleVariety: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Move_Car();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (InvestigatorVehicleObject.DistTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (InvestigatorVehicleObject.DistTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(InvestigatorVehicleObject);
	image
	(
		carImages["detective"],
		InvestigatorVehicleObject.x - carImages["detective"].width/2 + random(-InvestigatorVehicleObject.ShudderVal, InvestigatorVehicleObject.ShudderVal),
		InvestigatorVehicleObject.y + random(-InvestigatorVehicleObject.ShudderVal, InvestigatorVehicleObject.ShudderVal)
	);

}

function Turn_CarEngine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.VehicleVariety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.GasAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
