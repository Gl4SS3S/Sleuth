/*
801
Stage 3: La Traviata

Officer: 6680513
CaseNum: 801-2-75562275-6680513

La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row in the array, secretSociety. Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have tie.png so that might be helpful in your task.  Anyway you’ll have to untangle the array.

- Set the spotlights to shine on the members of the order. 
- Do this by setting the captured  property of the element in patrons to true. 
- You must use a single for loop to pick out the members of the order

Solve the case using only:
For (not nested)
patrons[ ][ ]

*/

var crowdImg;
var spotlight;

var patrons = [ [ { x: 50, y: 50, captured: false} , { x: 150, y: 50, captured: false} , { x: 250, y: 50, captured: false} , { x: 350, y: 50, captured: false} , { x: 450, y: 50, captured: false} , { x: 550, y: 50, captured: false} , { x: 650, y: 50, captured: false} , { x: 750, y: 50, captured: false} , { x: 850, y: 50, captured: false} , { x: 950, y: 50, captured: false}  ], [ { x: 50, y: 140, captured: false} , { x: 150, y: 140, captured: false} , { x: 250, y: 140, captured: false} , { x: 350, y: 140, captured: false} , { x: 450, y: 140, captured: false} , { x: 550, y: 140, captured: false} , { x: 650, y: 140, captured: false} , { x: 750, y: 140, captured: false} , { x: 850, y: 140, captured: false} , { x: 950, y: 140, captured: false}  ], [ { x: 50, y: 230, captured: false} , { x: 150, y: 230, captured: false} , { x: 250, y: 230, captured: false} , { x: 350, y: 230, captured: false} , { x: 450, y: 230, captured: false} , { x: 550, y: 230, captured: false} , { x: 650, y: 230, captured: false} , { x: 750, y: 230, captured: false} , { x: 850, y: 230, captured: false} , { x: 950, y: 230, captured: false}  ], [ { x: 50, y: 320, captured: false} , { x: 150, y: 320, captured: false} , { x: 250, y: 320, captured: false} , { x: 350, y: 320, captured: false} , { x: 450, y: 320, captured: false} , { x: 550, y: 320, captured: false} , { x: 650, y: 320, captured: false} , { x: 750, y: 320, captured: false} , { x: 850, y: 320, captured: false} , { x: 950, y: 320, captured: false}  ], [ { x: 50, y: 410, captured: false} , { x: 150, y: 410, captured: false} , { x: 250, y: 410, captured: false} , { x: 350, y: 410, captured: false} , { x: 450, y: 410, captured: false} , { x: 550, y: 410, captured: false} , { x: 650, y: 410, captured: false} , { x: 750, y: 410, captured: false} , { x: 850, y: 410, captured: false} , { x: 950, y: 410, captured: false}  ], [ { x: 50, y: 500, captured: false} , { x: 150, y: 500, captured: false} , { x: 250, y: 500, captured: false} , { x: 350, y: 500, captured: false} , { x: 450, y: 500, captured: false} , { x: 550, y: 500, captured: false} , { x: 650, y: 500, captured: false} , { x: 750, y: 500, captured: false} , { x: 850, y: 500, captured: false} , { x: 950, y: 500, captured: false}  ], [ { x: 50, y: 590, captured: false} , { x: 150, y: 590, captured: false} , { x: 250, y: 590, captured: false} , { x: 350, y: 590, captured: false} , { x: 450, y: 590, captured: false} , { x: 550, y: 590, captured: false} , { x: 650, y: 590, captured: false} , { x: 750, y: 590, captured: false} , { x: 850, y: 590, captured: false} , { x: 950, y: 590, captured: false}  ], [ { x: 50, y: 680, captured: false} , { x: 150, y: 680, captured: false} , { x: 250, y: 680, captured: false} , { x: 350, y: 680, captured: false} , { x: 450, y: 680, captured: false} , { x: 550, y: 680, captured: false} , { x: 650, y: 680, captured: false} , { x: 750, y: 680, captured: false} , { x: 850, y: 680, captured: false} , { x: 950, y: 680, captured: false}  ], [ { x: 50, y: 770, captured: false} , { x: 150, y: 770, captured: false} , { x: 250, y: 770, captured: false} , { x: 350, y: 770, captured: false} , { x: 450, y: 770, captured: false} , { x: 550, y: 770, captured: false} , { x: 650, y: 770, captured: false} , { x: 750, y: 770, captured: false} , { x: 850, y: 770, captured: false} , { x: 950, y: 770, captured: false}  ], [ { x: 50, y: 860, captured: false} , { x: 150, y: 860, captured: false} , { x: 250, y: 860, captured: false} , { x: 350, y: 860, captured: false} , { x: 450, y: 860, captured: false} , { x: 550, y: 860, captured: false} , { x: 650, y: 860, captured: false} , { x: 750, y: 860, captured: false} , { x: 850, y: 860, captured: false} , { x: 950, y: 860, captured: false}  ] ];
var secretSociety = [1,1,3,9,0,0,5,1,4,7];


function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////

  for (let index = 0; index < patrons.length; index++) {
    patrons[index][secretSociety[index]].captured = true;
  }

	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < patrons.length; i++)
	{
		for (var j = 0; j < patrons[i].length; j++)
		{
			if (patrons[i][j].captured)
			{
				image(spotlight, patrons[i][j].x, patrons[i][j].y, 100 , 100 );
			}
		}
	}
}
