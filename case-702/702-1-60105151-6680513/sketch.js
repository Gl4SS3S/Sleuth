/*

Officer: 6680513
CaseNum: 702-1-60105151-6680513

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of InvestigatorVehicle and the cars in
vehicleObject_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveVehicle()
{
	/*
	This function should do the following: 
	 - increment InvestigatorVehicle's MilesDriven property by its GasVal property 
	 - add a random amount between -0.05 and 0.05 to InvestigatorVehicle's EngineRumbleAmount property
	 - use the constrain function to constrain InvestigatorVehicle's EngineRumbleAmount property to values between 0.04 and 0.93
	 - call the cycleCar_engine function passing InvestigatorVehicle as an argument
	*/

  InvestigatorVehicle.MilesDriven += InvestigatorVehicle.GasVal;
  InvestigatorVehicle.EngineRumbleAmount += random(-0.05, 0.05);
  InvestigatorVehicle.EngineRumbleAmount = constrain(InvestigatorVehicle.EngineRumbleAmount, 0.04, 0.93);
  cycleCar_engine(InvestigatorVehicle);
}


function moveLanes(targetVehicle)
{
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_coord_a and lane_coord_b to effect the change.
	 hint: You will need to modify the XCoord property of targetVehicle.
	*/

  if (targetVehicle.XCoord == lane_coord_a)
  {
    targetVehicle.XCoord = lane_coord_b;
  }
  else
  {
    targetVehicle.XCoord = lane_coord_a;
  }
}


function checkCarAhead( car_obj_a, car_obj_b )
{
	/*
	This function should do the following: 
	 - determine if car_obj_a is in the same lane and less than 200px behind car_obj_b.
	 - do this by comparing the two cars' MilesDriven properties
	 - if these requirements are met then return true. Otherwise return false.
	*/

  //let value = car_obj_a.MilesDriven + 200 >= car_obj_b.MilesDriven && car_obj_a.XCoord == car_obj_b.XCoord;


    return car_obj_a.MilesDriven == car_obj_b.MilesDriven - 200 && car_obj_a.XCoord == car_obj_b.XCoord;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var InvestigatorVehicle;

var roadWidth;
var roadLeftEdge;
var lane_coord_a;
var lane_coord_b;
var carImages = {};

var vehicleObject_list = [
{ XCoord: 500, YCoord: 0, MilesDriven: -200, VehicleCategory: 'blueCar', NumberPlate: 'R4B20A', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 200, VehicleCategory: 'blueCar', NumberPlate: 'N1FGAZ', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 600, VehicleCategory: 'redCar', NumberPlate: '29DG4U', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 1000, VehicleCategory: 'redCar', NumberPlate: 'JKQVIW', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 1400, VehicleCategory: 'whiteCar', NumberPlate: 'B1H2KS', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 1800, VehicleCategory: 'whiteCar', NumberPlate: 'T040WX', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 2200, VehicleCategory: 'blueCar', NumberPlate: 'TOSD19', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 2600, VehicleCategory: 'blueCar', NumberPlate: 'J6VOAL', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 3000, VehicleCategory: 'blueCar', NumberPlate: '5X2JCM', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 3400, VehicleCategory: 'greenCar', NumberPlate: 'J5HAR2', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 3800, VehicleCategory: 'redCar', NumberPlate: 'FTRPXL', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 4200, VehicleCategory: 'blueCar', NumberPlate: 'RR1JCF', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 4600, VehicleCategory: 'whiteCar', NumberPlate: '0479XE', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 5000, VehicleCategory: 'whiteCar', NumberPlate: 'ZSHTI6', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 5400, VehicleCategory: 'redCar', NumberPlate: 'NPB1W4', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 5800, VehicleCategory: 'greenCar', NumberPlate: '4CM397', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 6200, VehicleCategory: 'blueCar', NumberPlate: 'DX0RV2', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 6600, VehicleCategory: 'blueCar', NumberPlate: 'RCICYT', GasVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, MilesDriven: 7000, VehicleCategory: 'greenCar', NumberPlate: '28EBNU', GasVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, MilesDriven: 7400, VehicleCategory: 'redCar', NumberPlate: '20KIQQ', GasVal: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_coord_a = 300;
	lane_coord_b = 500;

	InvestigatorVehicle = 
	{
		XCoord: roadLeftEdge + roadWidth/4,
		YCoord: 550,
		MilesDriven: 0,
		GasVal: 3,
		EngineRumbleAmount: 0,
		VehicleCategory: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	driveVehicle();
	for(var i = 0; i < vehicleObject_list.length; i++)
	{
    var b2b = checkCarAhead(InvestigatorVehicle, vehicleObject_list[i]);
    console.log(b2b);
		if(b2b)moveLanes(InvestigatorVehicle);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleObject_list.length; i++)
	{
		vehicleObject_list[i].MilesDriven += vehicleObject_list[i].GasVal;
		vehicleObject_list[i].YCoord = InvestigatorVehicle.YCoord - vehicleObject_list[i].MilesDriven + InvestigatorVehicle.MilesDriven;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (InvestigatorVehicle.MilesDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (InvestigatorVehicle.MilesDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(InvestigatorVehicle);
	image
	(
		carImages["detective"],
		InvestigatorVehicle.XCoord - carImages["detective"].width/2 + random(-InvestigatorVehicle.EngineRumbleAmount, InvestigatorVehicle.EngineRumbleAmount),
		InvestigatorVehicle.YCoord + random(-InvestigatorVehicle.EngineRumbleAmount, InvestigatorVehicle.EngineRumbleAmount)
	);

	//draw all other cars

	for(var i = 0; i < vehicleObject_list.length; i ++)
	{
		if(vehicleObject_list[i].YCoord < height && vehicleObject_list[i].YCoord > -height/2)
		{
			image(
			carImages[vehicleObject_list[i].VehicleCategory],
			vehicleObject_list[i].XCoord - carImages[vehicleObject_list[i].VehicleCategory].width/2,
			vehicleObject_list[i].YCoord
			);
			cycleCar_engine(vehicleObject_list[i]);

			drawExhaust(vehicleObject_list[i]);
		}
	}

}

function cycleCar_engine(car)
{

	car.exhaust.push({size: 2, x: car.XCoord, y: car.YCoord + carImages[car.VehicleCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.GasVal/3);
		if(car.VehicleCategory != "detective")car.exhaust[i].y += (InvestigatorVehicle.GasVal - car.GasVal);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
