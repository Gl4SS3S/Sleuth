/*

Officer: 6680513
CaseNum: 702-1-83466531-6680513

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

HINT: make sure you take a look at the initialisation of sleuth_vehicleObject and the cars in
CarData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_car()
{
	/*
	This function should do the following: 
	 - increment sleuth_vehicleObject's miles_driven property by its speed_amt property 
	 - add a random amount between -0.07 and 0.07 to sleuth_vehicleObject's vibrate_value property
	 - use the constrain function to constrain sleuth_vehicleObject's vibrate_value property to values between 0.02 and 1.14
	 - call the turnover_car_engine function passing sleuth_vehicleObject as an argument
	*/

  sleuth_vehicleObject.miles_driven += sleuth_vehicleObject.speed_amt;
  sleuth_vehicleObject.vibrate_value += random(-0.07, 0.07);
  sleuth_vehicleObject.vibrate_value = constrain(sleuth_vehicleObject.vibrate_value, 0.02, 1.14);
  turnover_car_engine(sleuth_vehicleObject);
}


function move_lanes(target_vehicle)
{
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePositionA and LanePositionB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the coord_x property of target_vehicle.
	*/

  if (target_vehicle.coord_x == LanePositionA)
  {
    target_vehicle.coord_x = LanePositionB;
  }
  else
  {
    target_vehicle.coord_x = LanePositionA;
  }
  return target_vehicle;
}


function checkCar_isAhead( VehicleA, VehicleB )
{
	/*
	This function should do the following: 
	 - determine if VehicleA is in the same lane and less than 200px behind VehicleB.
	 - do this by comparing the two cars' miles_driven properties
	 - if these requirements are met then return the number_plate property for VehicleB. Otherwise return false.
	*/
  if(VehicleA.miles_driven > VehicleB.miles_driven) return false;

  if (VehicleA.coord_x == VehicleB.coord_x && VehicleA.miles_driven + 200 > VehicleB.miles_driven)
  {
    return VehicleB.number_plate;
  }
  else
  {
    return false;
  }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuth_vehicleObject;

var roadWidth;
var roadLeftEdge;
var LanePositionA;
var LanePositionB;
var carImages = {};

var CarData = [
{ coord_x: 300, coord_y: 0, miles_driven: -200, car_category: 'greenCar', number_plate: 'O95WIX', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 200, car_category: 'blueCar', number_plate: 'EJLC5F', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 600, car_category: 'greenCar', number_plate: 'PJKIY4', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 1000, car_category: 'blueCar', number_plate: 'KRUK5D', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 1400, car_category: 'blueCar', number_plate: '75MYF8', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 1800, car_category: 'redCar', number_plate: 'HLWP5Z', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 2200, car_category: 'whiteCar', number_plate: 'XUKO8Q', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 2600, car_category: 'blueCar', number_plate: '32CMXG', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 3000, car_category: 'greenCar', number_plate: 'I2QME3', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 3400, car_category: 'greenCar', number_plate: 'SGRI88', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 3800, car_category: 'whiteCar', number_plate: 'VBH33F', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 4200, car_category: 'greenCar', number_plate: '2JLMW0', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 4600, car_category: 'greenCar', number_plate: 'VEUMIS', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 5000, car_category: 'blueCar', number_plate: 'TRE6XC', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 5400, car_category: 'greenCar', number_plate: '6ZCOVJ', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 5800, car_category: 'blueCar', number_plate: '3HFNRU', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 6200, car_category: 'redCar', number_plate: '1JZ1LP', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 6600, car_category: 'blueCar', number_plate: 'NM5CCU', speed_amt: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, miles_driven: 7000, car_category: 'whiteCar', number_plate: '77B4AD', speed_amt: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, miles_driven: 7400, car_category: 'whiteCar', number_plate: 'WFWUQY', speed_amt: 2, exhaust: [  ]} 
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
	LanePositionA = 300;
	LanePositionB = 500;

	sleuth_vehicleObject = 
	{
		coord_x: roadLeftEdge + roadWidth/4,
		coord_y: 550,
		miles_driven: 0,
		speed_amt: 3,
		vibrate_value: 0,
		car_category: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	drive_car();
	for(var i = 0; i < CarData.length; i++)
	{
    var b2b = checkCar_isAhead(sleuth_vehicleObject, CarData[i]);
    console.log(b2b);
		if(b2b)move_lanes(sleuth_vehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarData.length; i++)
	{
		CarData[i].miles_driven += CarData[i].speed_amt;
		CarData[i].coord_y = sleuth_vehicleObject.coord_y - CarData[i].miles_driven + sleuth_vehicleObject.miles_driven;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuth_vehicleObject.miles_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuth_vehicleObject.miles_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuth_vehicleObject);
	image
	(
		carImages["detective"],
		sleuth_vehicleObject.coord_x - carImages["detective"].width/2 + random(-sleuth_vehicleObject.vibrate_value, sleuth_vehicleObject.vibrate_value),
		sleuth_vehicleObject.coord_y + random(-sleuth_vehicleObject.vibrate_value, sleuth_vehicleObject.vibrate_value)
	);

	//draw all other cars

	for(var i = 0; i < CarData.length; i ++)
	{
		if(CarData[i].coord_y < height && CarData[i].coord_y > -height/2)
		{
			image(
			carImages[CarData[i].car_category],
			CarData[i].coord_x - carImages[CarData[i].car_category].width/2,
			CarData[i].coord_y
			);
			turnover_car_engine(CarData[i]);

			drawExhaust(CarData[i]);
		}
	}

}

function turnover_car_engine(car)
{

	car.exhaust.push({size: 2, x: car.coord_x, y: car.coord_y + carImages[car.car_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speed_amt/3);
		if(car.car_category != "detective")car.exhaust[i].y += (sleuth_vehicleObject.speed_amt - car.speed_amt);
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
