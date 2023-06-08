/*

Officer: 6680513
CaseNum: 401-0-89391106-6680513

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If NerveGas dips below 0.41, decrease aspirin by 0.01
	- If methanol goes above 0.58, increment aspirin by 0.01
	- When methanol dips below 0.31, decrease Sodium_Bicarbonate by 0.05
	- When arsenic dips below 0.64, increment Sodium_Bicarbonate by 0.04
	- If arsenic dips below 0.71, decrease hydrochloricAcid by 0.04
	- When methanol goes above 0.28, increment hydrochloricAcid by 0.05


Your conditional statements should consider the following poisons:

	- methanol
	- arsenic
	- NerveGas


Your conditional statements should modify the following antidotes:

	- aspirin
	- Sodium_Bicarbonate
	- hydrochloricAcid


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var methanol;
var arsenic;
var NerveGas;


//Declare the antidote variables
var aspirin;
var Sodium_Bicarbonate;
var hydrochloricAcid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	arsenic = 0.5;
	NerveGas = 0.5;
	aspirin = 0.5;
	Sodium_Bicarbonate = 0.5;
	hydrochloricAcid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	// - If NerveGas dips below 0.41, decrease aspirin by 0.01
	// - If methanol goes above 0.58, increment aspirin by 0.01
	// - When methanol dips below 0.31, decrease Sodium_Bicarbonate by 0.05
	// - When arsenic dips below 0.64, increment Sodium_Bicarbonate by 0.04
	// - If arsenic dips below 0.71, decrease hydrochloricAcid by 0.04
	// - When methanol goes above 0.28, increment hydrochloricAcid by 0.05

	if (NerveGas < 0.41) {
		aspirin -= 0.01;
	}

	if (methanol > 0.58) {
		aspirin += 0.01;
	}

	if (methanol < 0.31) {
		Sodium_Bicarbonate -= 0.05;
	}

	if (arsenic < 0.64) {
		Sodium_Bicarbonate += 0.04;
	}

	if (arsenic < 0.71) {
		hydrochloricAcid -= 0.04;
	}

	if (methanol > 0.28) {
		hydrochloricAcid += 0.05;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	arsenic = nextValue(graphs[1],arsenic);
	NerveGas = nextValue(graphs[2],NerveGas);


	aspirin = constrain(aspirin, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('NerveGas: ' + nf(NerveGas,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(Sodium_Bicarbonate,200,'Sodium_Bicarbonate');
	drawBar(hydrochloricAcid,350,'hydrochloricAcid');


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
