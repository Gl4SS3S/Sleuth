/*

Officer: 6680513
CaseNum: 401-2-64581767-6680513

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When spiderVenom goes above 0.55, hemlock goes above 0.71, and also lead dips below 0.58, try decreasing sulphates by 0.03
	- When formaldehyde dips below 0.54 or nerveGas dips below 0.61, raise sulphates by 0.03
	- When spiderVenom goes above 0.36 or formaldehyde dips below 0.51, whilst at the same time, nerveGas dips below 0.34, decrease chalk by 0.03
	- When lead goes above 0.33, whilst at the same time, hemlock goes above 0.37 or deadly_nightshade dips below 0.63, raise chalk by 0.04
	- When deadly_nightshade dips below 0.34 and nerveGas dips below 0.65, decrement Beta_Blocker by 0.02
	- When lead goes above 0.4 and formaldehyde goes above 0.66, increase Beta_Blocker by 0.04
	- If lead goes above 0.5 or deadly_nightshade dips below 0.66, decrease ethanol by 0.03
	- When formaldehyde goes above 0.5, or on the other hand, nerveGas dips below 0.65 and spiderVenom goes above 0.34, increment ethanol by 0.01


Your conditional statements should consider the following poisons:

	- formaldehyde
	- hemlock
	- lead
	- spiderVenom
	- deadly_nightshade
	- nerveGas


Your conditional statements should modify the following antidotes:

	- sulphates
	- chalk
	- Beta_Blocker
	- ethanol


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var formaldehyde;
var hemlock;
var lead;
var spiderVenom;
var deadly_nightshade;
var nerveGas;


//Declare the antidote variables
var sulphates;
var chalk;
var Beta_Blocker;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	formaldehyde = 0.5;
	hemlock = 0.5;
	lead = 0.5;
	spiderVenom = 0.5;
	deadly_nightshade = 0.5;
	nerveGas = 0.5;
	sulphates = 0.5;
	chalk = 0.5;
	Beta_Blocker = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
	// - When spiderVenom goes above 0.55, hemlock goes above 0.71, and also lead dips below 0.58, try decreasing sulphates by 0.03
	// - When formaldehyde dips below 0.54 or nerveGas dips below 0.61, raise sulphates by 0.03
	// - When spiderVenom goes above 0.36 or formaldehyde dips below 0.51, whilst at the same time, nerveGas dips below 0.34, decrease chalk by 0.03
	// - When lead goes above 0.33, whilst at the same time, hemlock goes above 0.37 or deadly_nightshade dips below 0.63, raise chalk by 0.04
	// - When deadly_nightshade dips below 0.34 and nerveGas dips below 0.65, decrement Beta_Blocker by 0.02
	// - When lead goes above 0.4 and formaldehyde goes above 0.66, increase Beta_Blocker by 0.04
	// - If lead goes above 0.5 or deadly_nightshade dips below 0.66, decrease ethanol by 0.03
	// - When formaldehyde goes above 0.5, or on the other hand, nerveGas dips below 0.65 and spiderVenom goes above 0.34, increment ethanol by 0.01

	if (spiderVenom > 0.55 && hemlock > 0.71 && lead < 0.58)
	{
		sulphates -= 0.03;
	}

	if (formaldehyde < 0.54 || nerveGas < 0.61)
	{
		sulphates += 0.03;
	}

	if ((spiderVenom > 0.36 || formaldehyde < 0.51) && nerveGas < 0.34)
	{
		chalk -= 0.03;
	}

	if (lead > 0.33 && (hemlock > 0.37 || deadly_nightshade < 0.63))
	{
		chalk += 0.04;
	}

	if (deadly_nightshade < 0.34 && nerveGas < 0.65)
	{
		Beta_Blocker -= 0.02;
	}

	if (lead > 0.4 && formaldehyde > 0.66)
	{
		Beta_Blocker += 0.04;
	}

	if (lead > 0.5 || deadly_nightshade < 0.66)
	{
		ethanol -= 0.03;
	}

	if (formaldehyde > 0.5 || nerveGas < 0.65 && spiderVenom > 0.34)
	{
		ethanol += 0.01;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	formaldehyde = nextValue(graphs[0],formaldehyde);
	hemlock = nextValue(graphs[1],hemlock);
	lead = nextValue(graphs[2],lead);
	spiderVenom = nextValue(graphs[3],spiderVenom);
	deadly_nightshade = nextValue(graphs[4],deadly_nightshade);
	nerveGas = nextValue(graphs[5],nerveGas);


	sulphates = constrain(sulphates, 0, 1);
	chalk = constrain(chalk, 0, 1);
	Beta_Blocker = constrain(Beta_Blocker, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


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
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock,1,2), 20,40);
	fill(colors[2]);
	text('lead: ' + nf(lead,1,2), 20,60);
	fill(colors[3]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,80);
	fill(colors[4]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,100);
	fill(colors[5]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(sulphates,50,'sulphates');
	drawBar(chalk,200,'chalk');
	drawBar(Beta_Blocker,350,'Beta_Blocker');
	drawBar(ethanol,500,'ethanol');


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
