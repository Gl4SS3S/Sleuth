/*

Officer: 6680513
CaseNum: 403-3-89031329-6680513

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Meyers Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 118 meters from Kay Twin's Hideout then alert local police by drawing a MediumPurple circle around it with a radius of 118 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a Brown rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumOrchid rectangle covering the area between Gates Avenue, Turing Place, Meyers Way and Adele Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
//     - if Shiffman is within 118 meters from Kay Twin's Hideout then alert local police by drawing a MediumPurple circle around it with a radius of 118 pixels.
// - if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a Brown rectangle around it.
// - if Shiffman is in neither position, a global alert must be issued by drawing a MediumOrchid rectangle covering the area between Gates Avenue, Turing Place, Meyers Way and Adele Street.

    if (dist(mouseX, mouseY, 110, 320) < 118)
    {
      fill(147,112,219);
      ellipse(110, 320, 236, 236);
    }
    else if (mouseX > 1715 && mouseX < 1825 && mouseY > 120 && mouseY < 225) {
      fill(165,42,42);
      rect(1715, 120, 110, 105);
    } else {
      fill(186,85,211);
      rect(455, 600, 770, 190);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

