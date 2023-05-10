/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6680513
CaseNum: 201-3-59372354-6680513

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. 
Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
        vertex(500, 90);
        vertex(640, 360);
        vertex(750, 285);
        vertex(750, 285);
        vertex(800, 295);
        vertex(790, 330);
        vertex(750, 330);
        vertex(700, 370);
        vertex(680, 450);
        vertex(580, 490);
        vertex(535, 445);
        vertex(515, 505);
        vertex(480, 505);
        vertex(480, 400);
        vertex(520, 400);
        vertex(420, 235);
        vertex(420, 235);
        vertex(410, 150);
        vertex(500, 90);
    endShape();

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
