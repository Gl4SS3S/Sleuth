/*

Officer: 6680513
CaseNum: 702-0-76524285-6680513

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

HINT: make sure you take a look at the initialisation of sleuth_car to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuth_car's distance_driven property by its gas_amount property 
	 - add a random amount between -0.01 and 0.01 to sleuth_car's engineShudder_amt property
	 - use the constrain function to constrain sleuth_car's engineShudder_amt property to values between 0.08 and 0.79
	 - call the runMotor function passing sleuth_car as an argument
	*/

  sleuth_car.distance_driven += sleuth_car.gas_amount;
  sleuth_car.engineShudder_amt += random(-0.01, 0.01);
  sleuth_car.engineShudder_amt = constrain(sleuth_car.engineShudder_amt, 0.08, 0.79);
  runMotor(sleuth_car);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuth_car;

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

	sleuth_car = 
	{
		x_position: roadLeftEdge + roadWidth/4,
		y_position: 300,
		distance_driven: 0,
		gas_amount: 3,
		engineShudder_amt: 0,
		vehicle_category: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	driveVehicle();


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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuth_car.distance_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuth_car.distance_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuth_car);
	image
	(
		carImages["detective"],
		sleuth_car.x_position - carImages["detective"].width/2 + random(-sleuth_car.engineShudder_amt, sleuth_car.engineShudder_amt),
		sleuth_car.y_position + random(-sleuth_car.engineShudder_amt, sleuth_car.engineShudder_amt)
	);

}

function runMotor(car)
{

	car.exhaust.push({size: 2, x: car.x_position, y: car.y_position + carImages[car.vehicle_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_amount/3);
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
