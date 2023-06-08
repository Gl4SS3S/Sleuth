/*

Officer: 6680513
CaseNum: 401-3-25445690-6680513

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If insecticide goes above 0.27 or alcohol goes above 0.33, whilst at the same time, arsenic dips below 0.49 or ricin goes above 0.45, decrease chalk by 0.02
	- When lead dips below 0.4 or warfarin goes above 0.5, whilst at the same time, chlorine dips below 0.47 and formaldehyde dips below 0.45, increase chalk by 0.03
	- If lead dips below 0.36 and warfarin dips below 0.42, or on the other hand, formaldehyde goes above 0.48, reduce opioids by 0.03
	- If chlorine dips below 0.46 and arsenic dips below 0.5, whilst at the same time, insecticide dips below 0.26 or alcohol dips below 0.47, increment opioids by 0.01
	- If lead goes above 0.42, whilst at the same time, insecticide goes above 0.63 or warfarin goes above 0.74, decrement paracetamol by 0.01
	- If either arsenic goes above 0.3, chlorine goes above 0.6, alcohol dips below 0.31, or perhaps formaldehyde goes above 0.75, increase paracetamol by 0.05
	- When warfarin dips below 0.31, whilst at the same time, alcohol goes above 0.73 or formaldehyde goes above 0.34, decrease calcium_chloride by 0.04
	- When insecticide goes above 0.61 and lead dips below 0.5, or on the other hand, chlorine goes above 0.72 and ricin dips below 0.26, increase calcium_chloride by 0.02
	- When formaldehyde dips below 0.31, chlorine goes above 0.46, and also lead goes above 0.31, decrease ethanol by 0.04
	- If warfarin dips below 0.49, arsenic dips below 0.3, and also alcohol goes above 0.25, increase ethanol by 0.03


Your conditional statements should consider the following poisons:

	- ricin
	- chlorine
	- lead
	- insecticide
	- formaldehyde
	- warfarin
	- arsenic
	- alcohol


Your conditional statements should modify the following antidotes:

	- chalk
	- opioids
	- paracetamol
	- calcium_chloride
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
var ricin;
var chlorine;
var lead;
var insecticide;
var formaldehyde;
var warfarin;
var arsenic;
var alcohol;


//Declare the antidote variables
var chalk;
var opioids;
var paracetamol;
var calcium_chloride;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	chlorine = 0.5;
	lead = 0.5;
	insecticide = 0.5;
	formaldehyde = 0.5;
	warfarin = 0.5;
	arsenic = 0.5;
	alcohol = 0.5;
	chalk = 0.5;
	opioids = 0.5;
	paracetamol = 0.5;
	calcium_chloride = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

	// - If lead dips below 0.36 and warfarin dips below 0.42, or on the other hand, formaldehyde goes above 0.48, reduce opioids by 0.03
	// - If chlorine dips below 0.46 and arsenic dips below 0.5, whilst at the same time, insecticide dips below 0.26 or alcohol dips below 0.47, increment opioids by 0.01
	// - If lead goes above 0.42, whilst at the same time, insecticide goes above 0.63 or warfarin goes above 0.74, decrement paracetamol by 0.01
	// - If either arsenic goes above 0.3, chlorine goes above 0.6, alcohol dips below 0.31, or perhaps formaldehyde goes above 0.75, increase paracetamol by 0.05
	// - When warfarin dips below 0.31, whilst at the same time, alcohol goes above 0.73 or formaldehyde goes above 0.34, decrease calcium_chloride by 0.04
	// - When insecticide goes above 0.61 and lead dips below 0.5, or on the other hand, chlorine goes above 0.72 and ricin dips below 0.26, increase calcium_chloride by 0.02
	// - When formaldehyde dips below 0.31, chlorine goes above 0.46, and also lead goes above 0.31, decrease ethanol by 0.04
	// - If warfarin dips below 0.49, arsenic dips below 0.3, and also alcohol goes above 0.25, increase ethanol by 0.03

	if((insecticide > 0.27 || alcohol > 0.33) && (arsenic < 0.49 || ricin > 0.45))
	{
		chalk -= 0.02;
	}

	if((lead < 0.4 || warfarin > 0.5) && (chlorine < 0.47 && formaldehyde < 0.45))
	{
		chalk += 0.03;
	}

	if ((lead < 0.36 && warfarin < 0.42) || formaldehyde > 0.48)
	{
		opioids -= 0.03;
	}

	if((chlorine < 0.46 && arsenic < 0.5) && (insecticide < 0.26 || alcohol < 0.47))
	{
		opioids += 0.01;
	}

	if(lead > 0.42 && (insecticide > 0.63 || warfarin > 0.74))
	{
		paracetamol -= 0.01;
	}

	if((arsenic > 0.3 || chlorine > 0.6) || (alcohol < 0.31 || formaldehyde > 0.75))
	{
		paracetamol += 0.05;
	}

	if(warfarin < 0.31 && (alcohol > 0.73 || formaldehyde > 0.34))
	{
		calcium_chloride -= 0.04;
	}

	if((insecticide > 0.61 && lead < 0.5) || (chlorine > 0.72 && ricin < 0.26))
	{
		calcium_chloride += 0.02;
	}

	if(formaldehyde < 0.31 && chlorine > 0.46 && lead > 0.31)
	{
		ethanol -= 0.04;
	}

	if(warfarin < 0.49 && arsenic < 0.3 && alcohol > 0.25)
	{
		ethanol += 0.03;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	chlorine = nextValue(graphs[1],chlorine);
	lead = nextValue(graphs[2],lead);
	insecticide = nextValue(graphs[3],insecticide);
	formaldehyde = nextValue(graphs[4],formaldehyde);
	warfarin = nextValue(graphs[5],warfarin);
	arsenic = nextValue(graphs[6],arsenic);
	alcohol = nextValue(graphs[7],alcohol);


	chalk = constrain(chalk, 0, 1);
	opioids = constrain(opioids, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	calcium_chloride = constrain(calcium_chloride, 0, 1);
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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('chlorine: ' + nf(chlorine,1,2), 20,40);
	fill(colors[2]);
	text('lead: ' + nf(lead,1,2), 20,60);
	fill(colors[3]);
	text('insecticide: ' + nf(insecticide,1,2), 20,80);
	fill(colors[4]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin,1,2), 20,120);
	fill(colors[6]);
	text('arsenic: ' + nf(arsenic,1,2), 20,140);
	fill(colors[7]);
	text('alcohol: ' + nf(alcohol,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(chalk,50,'chalk');
	drawBar(opioids,200,'opioids');
	drawBar(paracetamol,350,'paracetamol');
	drawBar(calcium_chloride,500,'calcium_chloride');
	drawBar(ethanol,650,'ethanol');


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
