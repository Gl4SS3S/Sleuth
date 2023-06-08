/*

Officer: 6680513
CaseNum: 401-1-10792091-6680513

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If cyanide dips below 0.73 or mercury dips below 0.33, try decreasing methylene by 0.02
	- When lead goes above 0.29, increase methylene by 0.05
	- If Snake_Venom goes above 0.62 or cyanide goes above 0.6, decrement plasma by 0.04
	- When mercury goes above 0.75, raise plasma by 0.01
	- When Snake_Venom goes above 0.45, decrement ethanol by 0.03
	- If cyanide dips below 0.67 and mercury dips below 0.34, increment ethanol by 0.03
	- When mercury dips below 0.63, try decreasing chalk by 0.03
	- If Snake_Venom goes above 0.49, increase chalk by 0.03


Your conditional statements should consider the following poisons:

	- mercury
	- Snake_Venom
	- lead
	- cyanide


Your conditional statements should modify the following antidotes:

	- methylene
	- plasma
	- ethanol
	- chalk


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var mercury;
var Snake_Venom;
var lead;
var cyanide;


//Declare the antidote variables
var methylene;
var plasma;
var ethanol;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	Snake_Venom = 0.5;
	lead = 0.5;
	cyanide = 0.5;
	methylene = 0.5;
	plasma = 0.5;
	ethanol = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	// - If cyanide dips below 0.73 or mercury dips below 0.33, try decreasing methylene by 0.02
	// - When lead goes above 0.29, increase methylene by 0.05
	// - If Snake_Venom goes above 0.62 or cyanide goes above 0.6, decrement plasma by 0.04
	// - When mercury goes above 0.75, raise plasma by 0.01
	// - When Snake_Venom goes above 0.45, decrement ethanol by 0.03
	// - If cyanide dips below 0.67 and mercury dips below 0.34, increment ethanol by 0.03
	// - When mercury dips below 0.63, try decreasing chalk by 0.03
	// - If Snake_Venom goes above 0.49, increase chalk by 0.03

	if(cyanide < 0.73 || mercury < 0.33){
		methylene -= 0.02;
	}

	if(lead > 0.29){
		methylene += 0.05;
	}

	if(Snake_Venom > 0.62 || cyanide > 0.6){
		plasma -= 0.04;
	}

	if(mercury > 0.75){
		plasma += 0.01;
	}

	if(Snake_Venom > 0.45){
		ethanol -= 0.03;
	}

	if(cyanide < 0.67 && mercury < 0.34){
		ethanol += 0.03;
	}

	if(mercury < 0.63){
		chalk -= 0.03;
	}

	if(Snake_Venom > 0.49){
		chalk += 0.03;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	Snake_Venom = nextValue(graphs[1],Snake_Venom);
	lead = nextValue(graphs[2],lead);
	cyanide = nextValue(graphs[3],cyanide);


	methylene = constrain(methylene, 0, 1);
	plasma = constrain(plasma, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	chalk = constrain(chalk, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('mercury: ' + nf(mercury,1,2), 20,20);
	fill(colors[1]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,40);
	fill(colors[2]);
	text('lead: ' + nf(lead,1,2), 20,60);
	fill(colors[3]);
	text('cyanide: ' + nf(cyanide,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(plasma,200,'plasma');
	drawBar(ethanol,350,'ethanol');
	drawBar(chalk,500,'chalk');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
